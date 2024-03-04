import { render } from '../framework/render.js';
import EventsListView from '../view/events-list-view.js';
import EventsListEmptyView from '../view/events-list-empty-view.js';
import EventPresenter from './event-presenter.js';

export default class EventsPresenter {
  #eventsListComponent = new EventsListView();
  #container = null;
  #eventsModel = null;
  #eventsData = null;

  constructor({ container, eventsModel }) {
    this.#container = container;
    this.#eventsModel = eventsModel;
  }

  init() {
    this.#eventsData = [...this.#eventsModel.events];
    this.#renderEventList();
  }

  #renderEventList() {
    render(this.#eventsListComponent, this.#container);

    if (!this.#eventsData.length) {
      render(new EventsListEmptyView(), this.#eventsListComponent.element);
      return;
    }

    for (let i = 0; i < this.#eventsData.length; i++) {
      this.#renderEvent(this.#eventsData[i]);
    }
  }

  #renderEvent(item) {
    const eventTypes = [...this.#eventsModel.eventTypes];

    const eventPresenter = new EventPresenter({
      eventsListContainer: this.#eventsListComponent.element,
      eventTypes,
      blankEventOffers: this.#eventsModel.getOffers(eventTypes[0], []),
    });

    eventPresenter.init(item);
  }
}
