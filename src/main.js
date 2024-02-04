import { render, RenderPosition } from './framework/render.js';
import ButtonNewEventView from './view/button-new-event-view.js';
import TripInfoView from './view/trip-info-view.js';
import SortView from './view/sort-view.js';
import EventsPresenter from './presenter/events-presenter.js';
import EventsModel from './model/events-model.js';
import DataService from './service/data-service.js';
import FilterPresenter from './presenter/filter-presenter.js';
import { sortCriteria as criteria } from './mock/sort-data.js';

const siteTripMainElement = document.querySelector('.trip-main');
const siteTripFiltersElement = document.querySelector('.trip-controls__filters');
const siteTripEventsElement = document.querySelector('.trip-events');

const dataService = new DataService();
const eventsModel = new EventsModel(dataService);

const eventsPresenter = new EventsPresenter({
  container: siteTripEventsElement,
  eventsModel,
});

const filterPresenter = new FilterPresenter({
  container: siteTripFiltersElement,
  eventsModel,
});

render(new TripInfoView({
  events: eventsModel.events
}), siteTripMainElement, RenderPosition.AFTERBEGIN);
render(new ButtonNewEventView(), siteTripMainElement);
render(new SortView({ criteria }), siteTripEventsElement);

eventsPresenter.init();
filterPresenter.init();
