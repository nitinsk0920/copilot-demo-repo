function checkNumber(value) {
  if (typeof value !== "number") {
    throw new Error("Expected a number but received " + typeof value);
  }
  return value;
}

module.exports = { checkNumber };
