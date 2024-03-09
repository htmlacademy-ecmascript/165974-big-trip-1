import { render } from '../framework/render.js';
import EventsListView from '../view/events-list-view.js';
import EventsListEmptyView from '../view/events-list-empty-view.js';
import EventPresenter from './event-presenter.js';

export default class EventsPresenter {
  #eventsListComponent = new EventsListView();
  #container = null;
  #eventsModel = null;
  #eventPresenters = new Map();

  constructor({ container, eventsModel }) {
    this.#container = container;
    this.#eventsModel = eventsModel;
  }

  init() {
    this.#renderEventList();
  }

  #renderEventList() {
    this.#clearEventList();

    render(this.#eventsListComponent, this.#container);

    if (!this.#eventsModel.events.length) {
      render(new EventsListEmptyView(), this.#eventsListComponent.element);
      return;
    }

    for (let i = 0; i < this.#eventsModel.events.length; i++) {
      this.#renderEvent(this.#eventsModel.events[i]);
    }
  }

  #renderEvent(item) {
    const eventTypes = this.#eventsModel.eventTypes;

    const eventPresenter = new EventPresenter({
      eventsListContainer: this.#eventsListComponent.element,
      eventTypes,
      blankEventOffers: this.#eventsModel.getOffers(eventTypes[0], []),
      onDataChange: this.#handleEventChange,
      onModeChange: this.#handleModeChange,
    });

    eventPresenter.init(item);
    this.#eventPresenters.set(item.id, eventPresenter);
  }

  #clearEventList() {
    if (this.#eventPresenters.size === 0) {
      return;
    }

    this.#eventPresenters.forEach((presenter) => presenter.destroy());
    this.#eventPresenters.clear();
  }

  #handleEventChange = (updatedEvent) => {
    this.#eventsModel.updateEvent(updatedEvent);
    this.#eventPresenters.get(updatedEvent.id).init(updatedEvent);
  };

  #handleModeChange = () => {
    this.#eventPresenters.forEach((presenter) => presenter.resetView());
  };
}
