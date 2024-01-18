import { render } from '../framework/render.js';
import EventsListView from '../view/events-list-view.js';
import EventsListItemView from '../view/events-list-item-view.js';
import EventView from '../view/event-view.js';
import EventFormView from '../view/event-form-view.js';

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
    const eventTypes = [...this.#eventsModel.eventTypes];

    const blankEvent = {
      type: eventTypes[0],
      dateFrom: null,
      dateTo: null,
      destination: null,
      basePrice: 0,
      isFavorite: false,
      offers: [...this.#eventsModel.getOffers(eventTypes[0], [])],
    };

    render(this.#eventsListComponent, this.#container);

    const eventListItemFormComponent = new EventsListItemView();

    render(new EventFormView({
      event: this.#eventsData[0] || blankEvent,
      eventTypes,
    }), eventListItemFormComponent.element);

    render(eventListItemFormComponent, this.#eventsListComponent.element);

    for (let i = 1; i < this.#eventsData.length; i++) {
      this.#renderEvent(this.#eventsData[i]);
    }
  }

  #renderEvent(item) {
    const eventListItemComponent = new EventsListItemView();
    const eventComponent = new EventView({ event: item });
    render(eventComponent, eventListItemComponent.element);
    render(eventListItemComponent, this.#eventsListComponent.element);
  }
}
