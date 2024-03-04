import { render, replace } from '../framework/render.js';
import EventsListItemView from '../view/events-list-item-view.js';
import EventView from '../view/event-view.js';
import EventFormView from '../view/event-form-view.js';

export default class EventPresenter {
  #eventsListContainer = null;
  #eventComponent = null;
  #eventFormComponent = null;
  #eventItem = null;
  #eventTypes = null;
  #blankEventOffers = null;

  constructor({ eventsListContainer, eventTypes, blankEventOffers }) {
    this.#eventsListContainer = eventsListContainer;
    this.#eventTypes = [...eventTypes];
    this.#blankEventOffers = [...blankEventOffers];
  }

  init(eventItem) {
    this.#eventItem = eventItem;

    const blankEvent = {
      type: this.#eventTypes[0],
      dateFrom: null,
      dateTo: null,
      destination: null,
      basePrice: 0,
      isFavorite: false,
      offers: this.#blankEventOffers,
    };

    this.#eventComponent = new EventView({
      event: this.#eventItem,
      onClick: this.#replaceEventToForm,
    });

    this.#eventFormComponent = new EventFormView({
      event: this.#eventItem || blankEvent,
      eventTypes: this.#eventTypes,
      onSubmit: this.#replaceFormToEvent,
      onClick: this.#replaceFormToEvent,
    });

    this.#renderEvent();
  }

  #renderEvent() {
    const eventListItemComponent = new EventsListItemView();
    render(this.#eventComponent, eventListItemComponent.element);
    render(eventListItemComponent, this.#eventsListContainer);
  }

  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      this.#replaceFormToEvent();
    }
  };

  #replaceEventToForm = () => {
    replace(this.#eventFormComponent, this.#eventComponent);
    document.addEventListener('keydown', this.#escKeyDownHandler);
  };

  #replaceFormToEvent = () => {
    replace(this.#eventComponent, this.#eventFormComponent);
    document.removeEventListener('keydown', this.#escKeyDownHandler);
  };
}
