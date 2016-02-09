var Validator = require('../exercise4.js');
var chai = require('chai');

var expect = chai.expect;

// Create an object that can do number validation with the following features:

describe('Testing number validator object.', function(){
  it('Can set/get minimum valid number', function(){
    var valid8 = new Validator();
    var set = 4;
    valid8.setMinNum(set);
    expect(valid8.minimumNum).to.equal(set);
    expect(valid8.getMinNum()).to.equal(set);
  });
  it('Can set/get maximum valid number', function(){
    var valid8 = new Validator();
    var set = 20;
    valid8.setMaxNum(set);
    expect(valid8.maximumNum).to.equal(set);
    expect(valid8.getMaxNum()).to.equal(set);
  });
  it('Can set/get an array of invalid numbers', function(){
    var valid8 = new Validator();
    var set = [13,19,23,29];
    valid8.setInvalidNums(set);
    expect(valid8.invalidNums).to.equal(set);
    expect(valid8.getInvalid()).to.equal(set);
  });
  it('Can set/get an array of valid numbers', function(){
    var valid8 = new Validator();
  });
});
//
//
// Can set/get an array of invalid numbers
// Can set/get an array of valid numbers
// It should use only one validation strategy at a time.
// If one strategy is set after another, apply only the latest.
