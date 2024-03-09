import { SortType } from '../const.js';

const sortCriteria = [
  {
    name: 'day',
    isChecked: true,
    isDisabled: false,
    sortType: SortType.DATE_DOWN,
  },
  {
    name: 'event',
    isChecked: false,
    isDisabled: true,
  },
  {
    name: 'time',
    isChecked: false,
    isDisabled: false,
    sortType: SortType.DURATION_DOWN,
  },
  {
    name: 'price',
    isChecked: false,
    isDisabled: false,
    sortType: SortType.PRICE_DOWN,
  },
  {
    name: 'offers',
    isChecked: false,
    isDisabled: true,
  },
];

export { sortCriteria };
