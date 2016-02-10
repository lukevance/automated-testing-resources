var helloWorld = require('../helloWorld');
var chai = require('chai')

var expect = chai.expect;

<<<<<<< HEAD
describe('hello World test', function(){
    it('should return "Hello World!!"', function(){
        
       expect(helloWorld.helloWorld()).to.equal("Hello World!!");
        
    });
    
    it('Greets unique user',function(){
        
        expect(helloWorld.greet('Roger')).to.equal("Hello Roger!!");
        
    })
});
=======
describe('Hello World Test', function(){

    hw = new HelloWorld();

    it('should return Hello World', function(){
        expect(hw.helloWorld()).to.equal('Hello World!');
    });

    it('Greets unique user', function(){
      expect(hw.greet('Luke')).to.equal("Hello Luke!");
    });

});
>>>>>>> 491810bee7edce07be3eb77ff1ef6cc8699fcc7a
