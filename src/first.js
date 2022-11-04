const mainLogic = (limit) => {
  if (isNaN(limit)) {
    throw new TypeError('Not Number');
  }

  if (limit === null) {
    throw new TypeError('Not Number');
  }

  limit = Number(limit);

  let sum = 0;
  for (let i = 0; i < limit; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }

  return sum;
};

module.exports = mainLogic;
