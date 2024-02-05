import { render, replace } from '../framework/render.js';
import EventsListView from '../view/events-list-view.js';
import EventsListItemView from '../view/events-list-item-view.js';
import EventView from '../view/event-view.js';
import EventFormView from '../view/event-form-view.js';
import EventsListEmptyView from '../view/events-list-empty-view.js';

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

    const blankEvent = {
      type: eventTypes[0],
      dateFrom: null,
      dateTo: null,
      destination: null,
      basePrice: 0,
      isFavorite: false,
      offers: [...this.#eventsModel.getOffers(eventTypes[0], [])],
    };

    const escKeyDownHandler = (evt) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        replaceFormToEvent();
      }
    };

    const eventListItemComponent = new EventsListItemView();

    const eventComponent = new EventView({
      event: item,
      onClick: replaceEventToForm,
    });

    const eventFormComponent = new EventFormView({
      event: this.#eventsData[0] || blankEvent,
      eventTypes,
      onSubmit: replaceFormToEvent,
      onClick: replaceFormToEvent,
    });

    function replaceEventToForm() {
      replace(eventFormComponent, eventComponent);
      document.addEventListener('keydown', escKeyDownHandler);
    }

    function replaceFormToEvent() {
      replace(eventComponent, eventFormComponent);
      document.removeEventListener('keydown', escKeyDownHandler);
    }

    render(eventComponent, eventListItemComponent.element);
    render(eventListItemComponent, this.#eventsListComponent.element);
  }
}
