var math = require('../exercise1');
var chai = require('chai');

var expect = chai.expect;

describe('Testing math libary', function(){
    describe('Testing addition', function(){
        it('should add 1+1 to equal 2', function(){
            expect(math.add(1,1)).to.equal(2);
        })
        
    }); 
});
