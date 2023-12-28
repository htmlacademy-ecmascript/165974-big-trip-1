import {render, RenderPosition} from './render.js';
import ButtonNewEventView from './view/button-new-event-view.js';
import TripInfoView from './view/trip-info-view.js';
import FilterView from './view/filter-view.js';
import SortView from './view/sort-view.js';
import EventsPresenter from './presenter/events-presenter.js';
import EventsModel from './model/events-model.js';

const siteTripMainElement = document.querySelector('.trip-main');
const siteTripControlsElement = document.querySelector('.trip-controls');
const siteTripEventsElement = document.querySelector('.trip-events');

const eventsModel = new EventsModel();

const eventsPresenter = new EventsPresenter({
  container: siteTripEventsElement,
  eventsModel,
});

render(new TripInfoView(), siteTripMainElement, RenderPosition.AFTERBEGIN);
render(new ButtonNewEventView(), siteTripMainElement);
render(new FilterView(), siteTripControlsElement);
render(new SortView(), siteTripEventsElement);

eventsPresenter.init();
