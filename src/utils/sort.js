// Функция помещает точки маршрута без даты в конце списка,
// возвращая нужный вес для колбэка sort
function getWeightForNullDate(dateA, dateB) {
  if (dateA === null && dateB === null) {
    return 0;
  }

  if (dateA === null) {
    return 1;
  }

  if (dateB === null) {
    return -1;
  }

  return null;
}

function sortEventsByDateUp(eventA, eventB) {
  const weight = getWeightForNullDate(eventA.dateFrom, eventB.dateFrom);

  return weight ?? new Date(eventA.dateFrom) - new Date(eventB.dateFrom);
}

function sortEventsByDateDown(eventA, eventB) {
  const weight = getWeightForNullDate(eventA.dateFrom, eventB.dateFrom);

  return weight ?? new Date(eventB.dateFrom) - new Date(eventA.dateFrom);
}

function sortEventsByPriceDown(eventA, eventB) {
  return eventB.basePrice - eventA.basePrice;
}

function sortEventsByDurationDown(eventA, eventB) {
  const diffA = new Date(eventA.dateTo) - new Date(eventA.dateFrom);
  const diffB = new Date(eventB.dateTo) - new Date(eventB.dateFrom);
  return diffB - diffA;
}

export { sortEventsByDateUp, sortEventsByDateDown, sortEventsByPriceDown, sortEventsByDurationDown };
