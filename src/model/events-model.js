import { getRandomEvent, getEventTypes, getAllOffersForEventType } from '../mock/event.js';

const EVENT_COUNT = 4;

export default class EventsModel {
  events = Array.from({ length: EVENT_COUNT }, getRandomEvent);

  eventTypes = getEventTypes();

  getEvents() {
    return this.events;
  }

  getEventTypes() {
    return this.eventTypes;
  }

  getAllOffersForEventType(eventType) {
    return getAllOffersForEventType(eventType);
  }
}
