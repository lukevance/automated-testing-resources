<<<<<<< HEAD
module.exports = {
    helloWorld: function(){
        return "Hello World!!";
    },
    greet: function(name){
        return "Hello " + name + "!!"
    }
    
}

=======
function HelloWorld(){
    this.helloWorld = function(){
        return 'Hello World!';
    };
    this.greet = function () {
      return 'Hello Luke!';
    };

}

module.exports = HelloWorld;
>>>>>>> 491810bee7edce07be3eb77ff1ef6cc8699fcc7a
