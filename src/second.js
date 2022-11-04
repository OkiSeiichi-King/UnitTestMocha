const mainLogic = (limit) => {
  if (isNaN(limit)) {
    throw new TypeError('Not Number');
  }

  if (limit === null) {
    throw new TypeError('Not Number');
  }

  limit = Number(limit);

  let sum = 0;
  let a = 1;
  let b = 1;

  while (a < limit) {
    sum += a;
    let temp = a;
    a = a + b;
    b = temp;
  }

  return sum;
};

module.exports = mainLogic;
