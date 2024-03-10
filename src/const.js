const EVENT_COUNT = 4;

const DATE_FORMATS = {
  one: 'YYYY-MM-DD',
  two: 'MMM D',
  three: 'DD/MM/YY',
  four: 'MMM',
  five: 'D',
  time: 'HH:mm'
};

const FilterType = {
  EVERYTHING: 'everything',
  FUTURE: 'future',
  PRESENT: 'present',
  PAST: 'past',
};

const SortType = {
  DATE_UP: 'date-up', // default
  DATE_DOWN: 'date-down',
  DURATION_DOWN: 'duration-down',
  PRICE_DOWN: 'price-down',
};

const SortCriteria = [
  {
    name: 'day',
    isChecked: true,
    isDisabled: false,
    sortType: SortType.DATE_UP,
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

export { EVENT_COUNT, DATE_FORMATS, FilterType, SortType, SortCriteria };
