// Here, both functions will be bundled, even if only one is ever used
export default {
  add(a, b) {
    return a + b;
  },

  subtract(a, b) {
    return a - b;
  }
}

// here, the entire class will be bundled any time it’s used
export class Number {
  constructor(num) {
    this.num = num;
  }

  add(otherNum) {
    return this.num + otherNum;
  }

  subtract(otherNum) {
    return this.num - otherNum;
  }
}

// if only one of these functions is ever used, only one will be bundled
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a + b;
}