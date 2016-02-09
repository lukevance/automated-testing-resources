var chai = require('chai');
var Logger = require('../exercise1.js');
var fs = require('fs');

var expect = chai.expect;
var fileName = 'exercise1.log';
var log = new Logger();


describe('Testing logger object', function(){

  beforeEach(function(done){
    log.init(fileName, function(err){
      if(err) {
        done(err);
      } else {
        done();
      }
    });
  });
  afterEach(function(done){
    fs.unlink(fileName);
    done();
  });


  it('initialize logger, check existing/empty file', function(done){
    fs.stat(fileName, function(err, stat){
      if(err || !stat.isFile()){
        done(err);
      } else {
        expect(stat.isFile()).to.equal(true);
        done();
      }
    });
  });

  it('should preappend LOG to parameter', function(done){
    log.warn('This is a long warning', function(err){
      if (err) done(err);
      fs.readFile(fileName, function(err, data){
        if (err) done(err);
        var str = /WARN: This is a long warning/;
        expect(data.toString()).to.match(str);
        done();
      });
    });
  });


  it('should preappend INFO to parameter', function(done){
    log.info('This is the appended info', function(err){
      if (err) done(err);
      fs.readFile(fileName, function(err, data) {
        if (err) done(err);
        var str = /INFO: This is the appended info/;
        expect(data.toString()).to.match(str);
        done();
      });
    });
  });

  it('should preappend LOG to parameter', function(done){
    log.log('This is the data to be logged', function(err){
    if (err) done(err);
      fs.readFile(fileName, function(err, data) {
        if (err) done(err);
        var str = /LOG: This is the data to be logged/;
        expect(data.toString()).to.match(str);
        done();
      });
    });
  });

  it('should preappend ERROR to parameter', function(done){
    log.error('This is the data to be logged', function(err){
    if (err) done(err);
      fs.readFile(fileName, function(err, data) {
        if (err) done(err);
        var str = /ERROR: This is the data to be logged/;
        expect(data.toString()).to.match(str);
        done();
      });
    });
  });

  it('should preappend DEBUG to parameter', function(done){
    log.debug('This is the data to be logged', function(err){
    if (err) done(err);
      fs.readFile(fileName, function(err, data) {
        if (err) done(err);
        var str = /DEBUG: This is the data to be logged/;
        expect(data.toString()).to.match(str);
        done();
      });
    });
  });

});
