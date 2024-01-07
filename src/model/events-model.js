export default class EventsModel {
  constructor(service) {
    this.service = service;
    this.events = this.service.getEvents();
    this.eventTypes = this.service.getEventTypes();
  }

  getEvents() {
    return this.events;
  }

  getEventTypes() {
    return this.eventTypes;
  }

  getOffers(type, idsArr) {
    return this.service.findOffers(type, idsArr);
  }
}
