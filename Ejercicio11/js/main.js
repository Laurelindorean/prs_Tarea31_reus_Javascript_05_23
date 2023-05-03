function aleatoria() {
  var array = new Array(11).fill(0);
  for (let i = 0; i < 36000; i++) {
    var num1 = Math.floor(Math.random() * 6) + 1;
    var num2 = Math.floor(Math.random() * 6) + 1;
    var suma = num1 + num2;
    array[suma - 2]++;
  }
  for (let i = 0; i < array.length; i++) {
    console.log("La suma " + (i + 2) + " apareció " + array[i] + " veces");
  }
}

aleatoria();
