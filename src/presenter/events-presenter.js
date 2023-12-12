import {render} from '../render.js';
import EventsListView from '../view/events-list-view.js';
import EventsListItemView from '../view/events-list-item-view.js';
import EventView from '../view/event-view.js';
import EventEditView from '../view/event-edit-view.js';
import EventAddView from '../view/event-add-view.js';

export default class EventsPresenter {
  eventsListComponent = new EventsListView();
  eventEditComponent = new EventEditView();
  eventAddComponent = new EventAddView();

  constructor({container}) {
    this.container = container;
  }

  init() {
    render(this.eventsListComponent, this.container);

    const eventListItemEditComponent = new EventsListItemView();
    render(new EventEditView(), eventListItemEditComponent.getElement());
    render(eventListItemEditComponent, this.eventsListComponent.getElement());

    for (let i = 0; i < 3; i++) {
      const eventListItemComponent = new EventsListItemView();
      render(new EventView(), eventListItemComponent.getElement());
      render(eventListItemComponent, this.eventsListComponent.getElement());
    }

    const eventListItemAddComponent = new EventsListItemView();
    render(new EventAddView(), eventListItemAddComponent.getElement());
    render(eventListItemAddComponent, this.eventsListComponent.getElement());
  }
}
