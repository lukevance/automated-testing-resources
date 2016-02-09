var chai = require('chai');
var request = require('supertest');
var app = require('../app');

var expect = chai.expect;


describe('Test for super test', function(){
    describe('Another Layer', function (){
        describe('Another Layer', function(){
            it('should have the word express', function(done){
                request(app)
                .get('/')
                .expect(200)
                .expect(/Express/)
                .end(function(err, res){
                if (err) return done(err);
                done();
                });
            });
            it('should return the parameter', function(done){
               request(app)
               .get('/test/5')
               .expect(200, {'id':6})
               .end(function(err, res){
                   if(err) return done(err);
                   done();
               }); 
            });
        })
    })
})