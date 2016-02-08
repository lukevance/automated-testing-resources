var HelloWorld = require('../helloWorld.js');
var expect = require('chai').expect;


describe('Hello World Test', function(){

    hw = new HelloWorld();

    it('should return Hello World', function(){
        expect(hw.helloWorld()).to.equal('Hello World!');
    });

    it('Greets unique user', function(){
      expect(hw.greet('Luke')).to.equal("Hello Luke!");
    });

});
