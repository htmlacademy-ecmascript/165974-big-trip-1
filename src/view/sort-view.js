import AbstractView from '../framework/view/abstract-view.js';

function createSortItemTemplate(criterion) {
  const { name, isChecked, isDisabled, sortType } = criterion;

  return (
    /*html*/`
      <div class="trip-sort__item  trip-sort__item--${name}">
        <input
          id="sort-${name}"
          class="trip-sort__input  visually-hidden"
          type="radio"
          name="trip-sort"
          value="sort-${name}"
          ${isChecked ? 'checked' : ''}
          ${isDisabled ? 'disabled' : ''}
        >
        <label
          class="trip-sort__btn"
          for="sort-${name}"
          ${sortType ? `data-sort-type="${sortType}"` : ''}
          ${isDisabled ? 'data-is-disabled="true"' : ''}
        >${name}</label>
      </div>
    `
  );
}

function createSortTemplate(sortCriteria) {
  const sortItemsTemplate = sortCriteria
    .map((criterion) => createSortItemTemplate(criterion))
    .join('');

  return (
    `
      <form class="trip-events__trip-sort  trip-sort" action="#" method="get">
        ${sortItemsTemplate}
      </form>
    `
  );
}

export default class SortView extends AbstractView {
  #criteria = null;
  #handleSortTypeChange = null;

  constructor({ criteria, onSortTypeChange }) {
    super();
    this.#criteria = criteria;
    this.#handleSortTypeChange = onSortTypeChange;
    this.element.addEventListener('click', this.#sortTypeChangeHandler);
  }

  get template() {
    return createSortTemplate(this.#criteria);
  }

  #sortTypeChangeHandler = (evt) => {
    if (evt.target.tagName !== 'LABEL' || !evt.target.dataset.sortType) {
      return;
    }

    evt.preventDefault();
    this.#handleSortTypeChange(evt.target.dataset.sortType);
  };
}
