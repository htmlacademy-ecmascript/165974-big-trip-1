export default class EventsModel {
  #service = null;
  #events = null;
  #eventTypes = null;

  constructor(service) {
    this.#service = service;
    this.#events = this.#service.events;
    this.#eventTypes = this.#service.eventTypes;
  }

  get events() {
    return this.#events;
  }

  updateEvent(updatedEventObj) {
    if (!this.#events) {
      return;
    }

    const foundIndex = this.#events.findIndex((item) => item.id === updatedEventObj.id);

    if (foundIndex !== -1) {
      this.#events[foundIndex] = updatedEventObj;
    }
  }

  get eventTypes() {
    return this.#eventTypes;
  }

  getOffers(type, idsArr) {
    return this.#service.findOffers(type, idsArr);
  }
}
