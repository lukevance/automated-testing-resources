var chai = require('chai');
var user = require('../user-database.js');
var knex = require('../db/knex');

var expect = chai.expect;

describe('Test user database functionality', function(){

    before(function(done) {
        console.log('before');
        knex.migrate.rollback();
        done();
    });

    beforeEach(function(done) {
        return knex.migrate.latest()
        .then(function() {
            console.log('beforeEach');
            done();
        });
    });

    afterEach(function(done) {
        return knex.migrate.rollback()
        .then(function() {
            console.log('afterEach');
            done();
        });
    });


   it('should insert a user into database', function(done){
        user.add('roger.schmidt','roger','schmdit').then(
            function(data){
                expect(data.rowCount).to.equal(1);
                done();
            },
            function(err){
                expect.fail('failed insert ' + err);
                done(err);
            }
        );
   });

   it('should get a list of all users', function(done){
     user.add('luke.vance', 'luke', 'vance').then(
       function(){
         user.add('roger.schmidt','roger','schmdit').then(
           function(){
             user.getAll()
              .then(
               function(data){
                 expect(data.length).to.equal(2);
                 done();
               },
               function(err){
                 expect.fail('failed getAll ' + err);
                 done(err);
               });
           });
       });
   });

   it('should get a specific user with a give userId', function(done){
     user.add('luke.vance', 'luke', 'vance').then(
       function(){
         user.getOne(1).then(
           function(data){
             expect(data[0].userId).to.equal(1);
             done();
           }, function(err) {
             expect.fail('failed getOne ' + err);
           });
       });
   });

   it('should delete a specific user with a given userId', function(done){
     user.add('luke.vance', 'luke', 'vance').then(
       function(){
         user.deleteOne(1).then(
           function(data){
             expect(data).to.equal(1);
             done();
           }, function(err){
             console.log(err);
             done(err);
           });
       });
   });

   it('should update a specific user with a given userId and updated information', function(done){
     user.add('luke.vance', 'luke', 'vance').then(
      function(){
        user.updateOne(1, {userName: 'provo149'}).then(
          function(data){
            expect(data).to.equal(1);
            done();
          }, function(err) {
            console.log(err);
            done(err);
        });
    });
  });
});
