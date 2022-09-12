'user strict'
var miVectorNum = [5, 7, 9, 2, 3, 6, 8];
//alert(miVectorNum);
var miVectorCar = ['m', 'i', ' ', 'c', 'a', 's', 'a'];
//alert(miVectorCar);
var miVectorStr = ["perro ", "gato ", "cuy ", "conejo "];
//alert(miVectorStr);
var miVectorVarios = ["luisa ", 22, true, 1.69];
//alert(miVectorVarios);
var miMatrizNum = [
    [5, 7, 9, 12, 25, 32, 18, 7],
    [13, 11, 10, 5, 2, 1, 9, 6],
    [7, 9, 21, 23, 12, 18, 35, 42],
    [27, 81, 72, 63, 52, 35, 27, 97]
];
//alert(miMatrizNum);

var miVectorNum1 = new Array();

function minombre() {
    var nombre = document.getElementById('idtxtNombre').value
    var apellido = document.getElementById('idtxtApellido').value

    //document.write("El nombre ingresado fue:" + nombre);
    alert("El apellido ingresado fue: " + nombre + apellido)
}

function suma_notas() {
    var nota1 = document.getElementById('idtxtnota1').value
    var nota2 = document.getElementById('idtxtnota2').value
    var nota3 = document.getElementById('idtxtnota3').value
    var p1 = nota1 * 0.3
    var p2 = nota2 * 0.3
    var p3 = nota3 * 0.4
    var notadefinitiva = parseFloat(p1) + parseFloat(p2) + parseFloat(p3)
    var totalnotas = notadefinitiva / 3

    alert("la suma de las notas es: " + p1 + p2 + p3 + " y la suma definitiva es: " + notadefinitiva)
    document.getElementById("idtxt%nota1").innerHTML = p1
    document.getElementById("idtxt%nota2").innerHTML = p2
    document.getElementById("idtxt%nota3").innerHTML = p3

    document.getElementById("idparsumanotas").innerHTML = notadefinitiva
    document.getElementById("idpardefinitiva").innerHTML = totalnotas
}

function llamame(nombre, apellido) {
    var asignatura = document.getElementById('idtxtAsignatura').value;
    document.getElementById("idpluisa").innerHTML = asignatura
    document.getElementById("idpnom_ape").innerHTML = nombre + apellido
}

function division(nota1, nota2) {
    try {
        parseFloat(nota1) / parseFloat(nota2);
    } catch (error) {
        alert("tienes un error");
        alert("tu error es:" + error);
    } finally {
        alert("proceso finalizado");
    }
    //var notadivision = nota1 / nota2
    // alert(" nota1 nota2: " + nota1 + " " +
    // nota2 + " resultado es: " + notadivision)
}

function vector() {
    for (i = 0; i <= 6; i++)

    {
        //  alert("ingrese numero en posicion" + i);
        vector[i] = prompt()
            // alert("vector en la posicion [ " + i + "] tiene " + vector[i]);
    }
}

function matriz() {
    for (i = 0; i <= 7; i++) {
        for (j = 0; j <= 3; j++) {
            alert("ingrese numero en posicion" + i + j);
            miMatrizNum[i][j] = prompt();
            alert("matriz en posicion [" + i + "][" + j + "] tiene:" + matriz[i][j])
        }
    }
}