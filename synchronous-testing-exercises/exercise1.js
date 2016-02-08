module.exports = {

  add: function(a,b){
    return a + b;
  },
  subtract: function(a,b){
    return a - b;
  },
  multiply: function(a,b){
    return a * b;
  },
  divide: function(a,b){
    return a / b;
  },
  power: function(a,b){
    var result = a;
    for (var i = 1; i<b; i++){
      result = result * b;
    }
    return result;
  },
  sqrt: function (a) {
    var found = false;
    var i = 0;
    while (i < a) {
      if ((a/i) === i) {
        found = true;
        return i;
      } else {
        i += 1;
      }
    }
    if (found === false) {
      return 'no square found';
    }
  }

};
