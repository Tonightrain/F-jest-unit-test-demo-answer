function filter(callback, array) {
  const result = [];
  array.forEach((item) => {
    if (callback(item)) {
      result.push(item);
    }
  });
  return result;
}

export default filter;
