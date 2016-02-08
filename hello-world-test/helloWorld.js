function HelloWorld(){
    this.helloWorld = function(){
        return 'Hello World!';
    };
    this.greet = function () {
      return 'Hello Luke!';
    };

}

module.exports = HelloWorld;
