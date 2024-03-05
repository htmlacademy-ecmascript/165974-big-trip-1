import { render, replace, remove } from '../framework/render.js';
import EventView from '../view/event-view.js';
import EventFormView from '../view/event-form-view.js';

export default class EventPresenter {
  #eventsListContainer = null;
  #eventComponent = null;
  #eventFormComponent = null;
  #eventItem = null;
  #eventTypes = null;
  #blankEventOffers = null;
  #handleDataChange = null;

  constructor({ eventsListContainer, eventTypes, blankEventOffers, onDataChange }) {
    this.#eventsListContainer = eventsListContainer;
    this.#eventTypes = [...eventTypes];
    this.#blankEventOffers = [...blankEventOffers];
    this.#handleDataChange = onDataChange;
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

    const prevEventComponent = this.#eventComponent;
    const prevEventFormComponent = this.#eventFormComponent;

    this.#eventComponent = new EventView({
      event: this.#eventItem,
      onClick: this.#replaceEventToForm,
      onFavoriteClick: this.#handleFavoriteClick,
    });

    this.#eventFormComponent = new EventFormView({
      event: this.#eventItem || blankEvent,
      eventTypes: this.#eventTypes,
      onSubmit: this.#handleFormSubmit,
      onClick: this.#replaceFormToEvent,
    });

    if (prevEventComponent === null
        || prevEventFormComponent === null
    ) {
      this.#renderEvent();
      return;
    }

    // Проверка на наличие в DOM необходима,
    // чтобы не пытаться заменить то, что не было отрисовано
    if (this.#eventsListContainer.contains(prevEventComponent.element)) {
      replace(this.#eventComponent, prevEventComponent);
    }

    if (this.#eventsListContainer.contains(prevEventFormComponent.element)) {
      replace(this.#eventFormComponent, prevEventFormComponent);
    }

    remove(prevEventComponent);
    remove(prevEventFormComponent);
  }

  #renderEvent() {
    render(this.#eventComponent, this.#eventsListContainer);
  }

  destroy() {
    remove(this.#eventComponent);
    remove(this.#eventFormComponent);
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

  #handleFormSubmit = (eventItem) => {
    this.#handleDataChange(eventItem);
    this.#replaceFormToEvent();
  };

  #handleFavoriteClick = () => {
    this.#handleDataChange({
      ...this.#eventItem,
      isFavorite: !this.#eventItem.isFavorite,
    });
  };
}
