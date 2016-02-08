function Toaster(){
  this.powerStatus = 'off';
  this.toastingStatus = 'off';

}

Toaster.prototype.power = function(){
  if (this.powerStatus === 'on') {
    this.powerStatus = 'off';
    this.toastingStatus = 'off';
  } else {
    this.powerStatus = 'on';
  }
};

Toaster.prototype.toast = function () {
  if (this.powerStatus === 'on') {
    if (this.toastingStatus === 'off') {
      this.toastingStatus = 'on';
    } else {
      this.toastingStatus = 'off';
    }
  } else {
    this.toastingStatus = 'off';
  }
};

module.exports = Toaster;
