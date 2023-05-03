function startTime() {
  var today = new Date();
  var hr = today.getHours();
  var min = today.getMinutes();
  var sec = today.getSeconds();
  //Si el valor es inferior a 10 le añadimos un 0 delante
  min = checkTime(min);
  sec = checkTime(sec);
  document.getElementById("reloj").innerHTML = hr + " : " + min + " : " + sec;
  var time = setTimeout(function () {
    startTime();
  }, 500);
}
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
