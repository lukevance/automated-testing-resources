var tax = require('../exercise2.js');
var chai = require('chai');

var expect = chai.expect;

// describe('Testing tax calculator', function(){
//   it('should tax the first $10 at 10%', function(){
//     expect(tax.calc(9)).to.equal(0.9);
//   });
//   it('should tax the second $10 at 7%', function(){
//     expect(tax.calc(18)).to.equal(1.56);
//   });
//   it('should tax the third $10 at 5%', function(){
//     expect(tax.calc(25)).to.equal(1.95);
//   });
//   it('should tax everything after that at 3%', function(){
//     expect(tax.calc(50)).to.equal(2.80);
//   });
//   it('should return "null" if the valued passed in is negative', function(){
//     expect(tax.calc(-5)).to.equal(null);
//   });
// });

// If the value passed to calculate taxes on is negative, return null.
