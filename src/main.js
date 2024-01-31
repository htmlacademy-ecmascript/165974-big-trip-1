import { render, RenderPosition } from './framework/render.js';
import ButtonNewEventView from './view/button-new-event-view.js';
import TripInfoView from './view/trip-info-view.js';
import FilterView from './view/filter-view.js';
import SortView from './view/sort-view.js';
import EventsPresenter from './presenter/events-presenter.js';
import EventsModel from './model/events-model.js';
import DataService from './service/data-service.js';
import { generateFilter } from './mock/filter-data.js';
import { sortCriteria as criteria } from './mock/sort-data.js';

const siteTripMainElement = document.querySelector('.trip-main');
const siteTripControlsElement = document.querySelector('.trip-controls');
const siteTripEventsElement = document.querySelector('.trip-events');

const dataService = new DataService();
const eventsModel = new EventsModel(dataService);

const eventsPresenter = new EventsPresenter({
  container: siteTripEventsElement,
  eventsModel,
});

const filters = generateFilter(eventsModel.events);

render(new TripInfoView({
  events: eventsModel.events
}), siteTripMainElement, RenderPosition.AFTERBEGIN);
render(new ButtonNewEventView(), siteTripMainElement);
render(new FilterView({ filters }), siteTripControlsElement);
render(new SortView({ criteria }), siteTripEventsElement);

eventsPresenter.init();
