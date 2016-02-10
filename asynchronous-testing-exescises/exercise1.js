var fs = require('fs');

function Logger () {
  this.name = '';
}

Logger.prototype.init = function (fileName, callback) {
  this.name = fileName;
  fs.writeFile(fileName, '', function(err){
    callback(err);
  });
};

Logger.prototype.warn = function (logString, callback) {
  fs.appendFile(this.name, 'WARN: ' + logString, function(err){
    callback(err);
  });
};

Logger.prototype.info = function (logString, callback) {
  fs.appendFile(this.name, 'INFO: ' + logString, function(err) {
    callback(err);
  });
};

Logger.prototype.log = function (logString, callback) {
  fs.appendFile(this.name, 'LOG: ' + logString, function(err) {
    callback(err);
  });
};

Logger.prototype.error = function (logString, callback) {
  fs.appendFile(this.name, 'ERROR: ' + logString, function(err) {
    callback(err);
  });
};

Logger.prototype.debug = function (logString, callback) {
  fs.appendFile(this.name, 'DEBUG: ' + logString, function(err) {
    callback(err);
  });
};

module.exports = Logger;
