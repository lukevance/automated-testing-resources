var chai = require('chai');
var user = require('../user-database.js');
var knex = require('../db/knex')

var expect = chai.expect;

describe('Test user database functionality', function(){
   
    before(function(done) {
        console.log('before')
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
                expect.fail('failed insert');
                done();
            }
        )
   });
    
   it('should get a list of all users');
   
   it('should get a specific user with a give userId');
   
   it('should delete a specific user with a given userId')
   
   it('should update a specific user with a given userId and updated information')
    
});

