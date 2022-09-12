alert("Luisa Fernanda");
alert("Bolaños Medina");
console.log("Quiero Cafe ");
console.log(7 + 5);
document.write("Hambre 10,Cafe 0");
var papa = "Hector";
var mama = "Luz";
var Luisa = "Luisa";
var num = 5
var numr = 8
var num3;
var num4;
var suma;

document.write("<br>El papá de " + Luisa + " es " + papa + " y su mama es " + mama);


if (num2 % 2 == 0) {
    document.write("<br>el numero  es par " + numr);
} else {
    document.write("<br>el numero  es impar " + numr);
}
if (num1 % 2 == 0) {
    document.write("<br>el numero  es par " + num);
} else {
    document.write("<br>el numero  es impar " + num);
}


var num3 = prompt("ingresa un numero");
var num4 = prompt("ingresa otro numero");

if (parseInt(num3, 10) > (parseInt(num4, 10))) {
    document.write("<br>el mayor es el " + num3);
} else if (parseInt(num3, 10) < (parseInt(num4, 10))) {
    document.write("<br>el menor es " + num3);
} else if (parseInt(num3, 10) == (parseInt(num4, 10))) {
    document.write("<br>el menor es " + num3);
}


var num5 = prompt("ingrese un valor");
var num6 = prompt("ingrese otro valor");

var suma = parseInt(num5) + parseInt(num6);
document.write("<br>el valor es " + suma);

/*FIBONACCI*/
var serie = prompt("ingrese el numero para la serie fibonacci");
var num1 = 0;
var num2 = 1;
var suma = 1;

for (i = 1; i < parseInt(serie, 10); i++) {

    // muestro la suma
    document.write("<br> ", suma);

    //primero sumamos
    suma = num1 + num2;
    //Despues, cambiamos la segunda variable por la primera
    num1 = num2;
    //Por ultimo, cambiamos la suma por la segunda variable
    num2 = suma;

}