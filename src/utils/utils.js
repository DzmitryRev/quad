const ALL = 'All';
const FAST = 'Fast';
const BEST = 'Best';
const CHEAP = 'Cheap';

export const SetSort = (sort, sortArray) => {
  if (sort === ALL) {
    return sortArray;
  }
  if (sort === FAST) {
    let result = sortArray.reduce((acc, curr) =>
      acc.speed > curr.speed ? acc : curr
    );
    return [result];
  }
  if (sort === BEST) {
    let result = sortArray.filter((item) => item.rating >= 4);
    return result;
  }
  if (sort === CHEAP) {
    let result = sortArray.reduce((acc, curr) =>
      acc.price > curr.price ? acc : curr
    );
    return [result];
  }
};
