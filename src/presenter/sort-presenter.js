import { render, remove } from '../framework/render.js';
import SortView from '../view/sort-view.js';
import { sortEventsByDateDown, sortEventsByPriceDown, sortEventsByDurationDown } from '../utils/sort.js';
import { SortType } from '../const.js';
import { sortCriteria as criteria } from '../mock/sort-data.js';

export default class SortPresenter {
  #container = null;
  #eventsModel = null;
  #criteria = [];
  #sortComponent = null;
  #currentSortType = SortType.DATE_DOWN;
  #onSortChange = null;

  constructor({ container, eventsModel, onSortChange }) {
    this.#container = container;
    this.#eventsModel = eventsModel;
    this.#criteria = criteria;
    this.#onSortChange = onSortChange;
  }

  init() {
    this.#sortEvents(SortType.DATE_DOWN); // ? this.#sortEvents(this.#currentSortType) ?
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
      case SortType.DATE_DOWN:
        this.#eventsModel.events.sort(sortEventsByDateDown);
        break;
      default:
        this.#eventsModel.events.sort(sortEventsByDateDown);
    }

    this.#currentSortType = sortType;
  }
}
