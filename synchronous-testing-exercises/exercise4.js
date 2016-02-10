function Validator () {

}

Validator.prototype.setMinNum = function (newMin) {
  this.minimumNum = newMin;
};

Validator.prototype.getMinNum = function () {
  return this.minimumNum;
};

Validator.prototype.setMaxNum = function (newMax) {
  this.maximumNum = newMax;
};

Validator.prototype.getMaxNum = function () {
  return this.maximumNum;
};

Validator.prototype.setInvalidNums = function (array) {
  this.invalidNums = array;
};

Validator.prototype.getInvalid = function () {
  return this.invalidNums;
};

module.exports = Validator;
