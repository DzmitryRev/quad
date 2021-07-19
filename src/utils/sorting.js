export const SetSort = (sort, sortArray) => {
  if (sort === "All") {
    return sortArray;
  }
  if (sort === "Fast") {
    let result = sortArray.reduce((acc, curr) =>
      acc.speed > curr.speed ? acc : curr
    );
    return [result];
  }
  if (sort === "Best") {
    let result = sortArray.filter((item) => item.rating >= 4);
    return result;
  }
  if (sort === "Cheap") {
    let result = sortArray.reduce((acc, curr) =>
      acc.price > curr.price ? acc : curr
    );
    return [result];
  }
};
