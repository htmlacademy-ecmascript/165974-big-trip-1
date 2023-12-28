import {render} from '../render.js';
import EventsListView from '../view/events-list-view.js';
import EventsListItemView from '../view/events-list-item-view.js';
import EventView from '../view/event-view.js';
import EventFormView from '../view/event-form-view.js';

export default class EventsPresenter {
  eventsListComponent = new EventsListView();
  eventFormComponent = new EventFormView();

  constructor({container, eventsModel}) {
    this.container = container;
    this.eventsModel = eventsModel;
  }

  init() {
    this.eventsData = [...this.eventsModel.getEvents()];

    render(this.eventsListComponent, this.container);

    const eventListItemFormComponent = new EventsListItemView();
    render(new EventFormView(), eventListItemFormComponent.getElement());
    render(eventListItemFormComponent, this.eventsListComponent.getElement());

    for (let i = 0; i < this.eventsData.length; i++) {
      const eventListItemComponent = new EventsListItemView();
      render(new EventView({event: this.eventsData[i]}), eventListItemComponent.getElement());
      render(eventListItemComponent, this.eventsListComponent.getElement());
    }
  }
}
