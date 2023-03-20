'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(
    compareFunction = (a, b) => `${a}` > `${b}`
  ) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const current = this[i];

        if (compareFunction(prev, current) > 0) {
          [this[i], this[i - 1]] = [prev, current];
          count++;
        }
      }
    } while (count);

    return this;
  };
}

module.exports = applyCustomSort;
