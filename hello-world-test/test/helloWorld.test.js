var helloWorld = require('../helloWorld');
var chai = require('chai')

var expect = chai.expect;

describe('hello World test', function(){
    it('should return "Hello World!!"', function(){
        
       expect(helloWorld.helloWorld()).to.equal("Hello World!!");
        
    });
    
    it('Greets unique user',function(){
        
        expect(helloWorld.greet('Roger')).to.equal("Hello Roger!!");
        
    })
});