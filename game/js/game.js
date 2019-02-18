var fireballSize = 22;
var getFireballSpeed = function(left) {
  if (left) {
    return 5;
  }else {
    return 2;
  }
};
var wizardSpeed = 3;
var wizardWidth = 70;
var getWizardHeight = function() {
  return wizardWidth * 1.337;
};

function getWizardX(width) {
  return;
};
function getWizardY(height) {
  return;
}
console.log(getWizardHeight());
console.log(getFireballSpeed(true));
