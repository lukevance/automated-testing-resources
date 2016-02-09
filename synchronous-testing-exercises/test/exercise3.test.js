var Toaster = require('../exercise3.js');
var chai = require('chai');

var expect = chai.expect;
// var toasty = new Toaster();

// describe('Testing Toaster object functionality', function(){
//   it('should have a power status of off upon instantiation', function(){
//     var toasty = new Toaster();
//     expect(toasty.powerStatus).to.equal('off');
//   });
//   it('should have a toasting status of "off" upon instantiation', function(){
//     var toasty = new Toaster();
//     expect(toasty.toastingStatus).to.equal('off');
//   });
//   it('When the power function is called, it should change the power status to "on" ', function(){
//     var toasty = new Toaster();
//     toasty.power();
//     expect(toasty.powerStatus).to.equal('on');
//   });
//   it('When the power function is called, it should turn change the power status to the opposite of the current status', function(){
//     var toasty = new Toaster();
//     toasty.power();
//     toasty.power();
//     expect(toasty.powerStatus).to.equal('off');
//   });
//   it('When the toast function is called, and the power is off, the toasting status should not change to on.', function(){
//     var toasty = new Toaster();
//     toasty.toast();
//     expect(toasty.toastingStatus).to.equal('off');
//   });
//   it('When the toast function is called, and the power is on, the toasting status should change to the opposite of the current status.', function(){
//     var toasty = new Toaster();
//     toasty.power();
//     toasty.toast();
//     toasty.toast();
//     expect(toasty.toastingStatus).to.equal('off');
//   });
//   it('When the power status is on, and the toasting status is on, and the power function is called, it should set the power status and the toasting status to off.', function(){
//     var toasty = new Toaster();
//     toasty.power();
//     toasty.toast();
//     toasty.power();
//     expect(toasty.toastingStatus).to.equal('off');
//     expect(toasty.powerStatus).to.equal('off');
//   });
// });
