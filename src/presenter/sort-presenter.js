import { render, remove } from '../framework/render.js';
import SortView from '../view/sort-view.js';
import { sortEventsByDateUp, sortEventsByPriceDown, sortEventsByDurationDown } from '../utils/sort.js';
import { SortType, SortCriteria as criteria } from '../const.js';

export default class SortPresenter {
  #container = null;
  #eventsModel = null;
  #criteria = [];
  #sortComponent = null;
  #currentSortType = SortType.DATE_UP;
  #onSortChange = null;

  constructor({ container, eventsModel, onSortChange }) {
    this.#container = container;
    this.#eventsModel = eventsModel;
    this.#criteria = criteria;
    this.#onSortChange = onSortChange;
  }

  init() {
    this.#sortEvents(SortType.DATE_UP); // ? this.#sortEvents(this.#currentSortType) ?
    this.#renderSort();
  }

  #renderSort() {
    this.#sortComponent = new SortView({
      criteria: this.#criteria,
      onSortTypeChange: this.#handleSortTypeChange,
    });

    render(this.#sortComponent, this.#container);
  }

  #changeSortCriteriaChecked(sortType) {
    this.#criteria.forEach((item) => {
      item.isChecked = item.sortType === sortType;
    });
  }

  #handleSortTypeChange = (sortType) => {
    if (this.#currentSortType === sortType) {
      return;
    }

    this.#changeSortCriteriaChecked(sortType);
    remove(this.#sortComponent);
    this.#renderSort();

    this.#sortEvents(sortType);
    this.#onSortChange();
  };

  #sortEvents(sortType) {
    switch (sortType) {
      case SortType.DURATION_DOWN:
        this.#eventsModel.events.sort(sortEventsByDurationDown);
        break;
      case SortType.PRICE_DOWN:
        this.#eventsModel.events.sort(sortEventsByPriceDown);
        break;
      case SortType.DATE_UP:
        this.#eventsModel.events.sort(sortEventsByDateUp);
        break;
      default:
        this.#eventsModel.events.sort(sortEventsByDateUp);
    }

    this.#currentSortType = sortType;
  }
}
