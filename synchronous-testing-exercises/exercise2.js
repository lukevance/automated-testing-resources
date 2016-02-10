module.exports = {
  calc: function(a) {
    var tax = 0;
    if (a < 0) {
      return null;
    } else if (a <= 10) {
      tax += a * 0.1;
    } else if (a <= 20){
      tax += 1 + ((a - 10) * 0.07);
    } else if (a <= 30) {
      tax += 1.7 + ((a - 20) * 0.05);
    } else if (a > 30) {
      tax += 2.20 + ((a - 30) * 0.03);
    }
    return Math.round(tax * 100)/100;
  }
};
