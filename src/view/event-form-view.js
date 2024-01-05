import { createElement } from '../render.js';
import { formatDate } from '../utils.js';
import { DATE_FORMATS } from '../const.js';

function createEventFormTypesTemplate(currentType, eventTypes) {
  const eventTypesListTemplate = eventTypes.map((eventType) => {
    const html = /*html*/`
      <div class="event__type-item">
        <input id="event-type-${eventType}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${eventType}">
        <label class="event__type-label  event__type-label--${eventType}" for="event-type-${eventType}-1">${eventType}</label>
      </div>
    `;

    return html;
  }).join('');

  return (
    /*html*/`
      <div class="event__type-wrapper">
        <label class="event__type  event__type-btn" for="event-type-toggle-1">
          <span class="visually-hidden">Choose event type</span>
          <img class="event__type-icon" width="17" height="17" src="img/icons/${currentType}.png" alt="Event type icon">
        </label>
        <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

        <div class="event__type-list">
          <fieldset class="event__type-group">
            <legend class="visually-hidden">Event type</legend>

            ${eventTypesListTemplate}
          </fieldset>
        </div>
      </div>
    `
  );
}

function createEventFormOffersTemplate(checkedOffers, allOffersForEventType) {
  const isChecked = (offer) => !!(checkedOffers.find((checkedOffer) => checkedOffer.id === offer.id));

  const offersTemplate = allOffersForEventType.map((offer) => {
    const html = /*html*/`
      <div class="event__offer-selector">
        <input class="event__offer-checkbox  visually-hidden" id="event-offer-meal-1" type="checkbox" name="event-offer-meal" ${isChecked(offer) ? 'checked' : ''}>
        <label class="event__offer-label" for="event-offer-meal-1">
          <span class="event__offer-title">${offer.title}</span>
          &plus;&euro;&nbsp;
          <span class="event__offer-price">${offer.price}</span>
        </label>
      </div>
    `;

    return html;
  }).join('');

  return (
    allOffersForEventType.length ?
    /*html*/`
      <section class="event__section  event__section--offers">
        <h3 class="event__section-title  event__section-title--offers">Offers</h3>

        <div class="event__available-offers">
          ${offersTemplate}
        </div>
      </section>
    ` : ''
  );
}

function createEventFormDestinationTemplate(destination) {
  const photosTemplate = destination ? destination.pictures.map((picture) => {
    const html = /*html*/`
      <img class="event__photo" src="${picture.src}" alt="${picture.description}">
    `;

    return html;
  }).join('') : '';

  return (
    destination ?
    /*html*/`
      <section class="event__section  event__section--destination">
        <h3 class="event__section-title  event__section-title--destination">Destination</h3>
        <p class="event__destination-description">${destination.description}</p>

        <div class="event__photos-container">
          <div class="event__photos-tape">
            ${photosTemplate}
          </div>
        </div>
      </section>
    ` : ''
  );
}

function createEventFormTemplate(event, eventTypes, allOffersForEventType) {
  const { type, dateFrom, dateTo, destination, basePrice, offers } = event;

  const dateFromFormatted = dateFrom ?
    `${formatDate(dateFrom, DATE_FORMATS.three)} ${formatDate(dateFrom, DATE_FORMATS.time)}` :
    '';
  const dateToFormatted = dateTo ?
    `${formatDate(dateTo, DATE_FORMATS.three)} ${formatDate(dateTo, DATE_FORMATS.time)}` :
    '';

  return (
    /*html*/`
      <form class="event event--edit" action="#" method="post">
        <header class="event__header">

          ${createEventFormTypesTemplate(type, eventTypes)}

          <div class="event__field-group  event__field-group--destination">
            <label class="event__label  event__type-output" for="event-destination-1">
              ${type}
            </label>
            <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${destination ? destination.name : ''}" list="destination-list-1">
            <datalist id="destination-list-1">
              <!--
              <option value="Amsterdam"></option>
              <option value="Geneva"></option>
              <option value="Chamonix"></option>
              -->
            </datalist>
          </div>

          <div class="event__field-group  event__field-group--time">
            <label class="visually-hidden" for="event-start-time-1">From</label>
            <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${dateFromFormatted}">
            &mdash;
            <label class="visually-hidden" for="event-end-time-1">To</label>
            <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${dateToFormatted}">
          </div>

          <div class="event__field-group  event__field-group--price">
            <label class="event__label" for="event-price-1">
              <span class="visually-hidden">Price</span>
              &euro;
            </label>
            <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${basePrice}">
          </div>

          <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
          <button class="event__reset-btn" type="reset">Cancel</button>
          <!--
            <button class="event__reset-btn" type="reset">Delete</button>
            <button class="event__rollup-btn" type="button">
              <span class="visually-hidden">Open event</span>
            </button>
          -->
        </header>
        <section class="event__details">
          ${createEventFormOffersTemplate(offers, allOffersForEventType)}

          ${createEventFormDestinationTemplate(destination)}
        </section>
      </form>
    `
  );
}

export default class EventFormView {
  constructor({ event, eventTypes, allOffersForEventType }) {
    this.eventTypes = [...eventTypes];

    this.blankEvent = {
      type: eventTypes[0],
      dateFrom: null,
      dateTo: null,
      destination: null,
      basePrice: 0,
      isFavorite: false,
      offers: []
    };

    this.event = event || this.blankEvent;

    this.allOffersForEventType = [...allOffersForEventType];
  }

  getTemplate() {
    return createEventFormTemplate(this.event, this.eventTypes, this.allOffersForEventType);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
