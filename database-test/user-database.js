var knex = require('./db/knex');

module.exports = {
    add: function(userName, fName, lName){
        return knex('users').insert({'userName': userName, 'fName': fName, 'lName': lName});
    },
    getAll: function() {
      return knex('users');
    },
    getOne: function(id) {
      return knex('users').where({'userId': id});
    },
    updateOne: function(id, newVals) {
      return knex('users').where({'userId': id}).update(newVals);
    },
    deleteOne: function(id) {
      return knex('users').where({'userId':id}).del();
    }

};


// Get all users from database,
// Get one user with a given id,
// Update 1 user with a given id, and updated values,
// Delete 1 user with a given id.
