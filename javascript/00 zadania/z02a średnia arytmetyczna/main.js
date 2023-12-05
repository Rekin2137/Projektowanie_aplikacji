let a = prompt("podaj liczbe a","");
a = parseFloat(a)
let b = prompt("podaj liczbe b","");
b = parseFloat(b)
let c = prompt("podaj liczbe c","");
c = parseFloat(c)
let d = prompt("podaj liczbe d","");
d = parseFloat(d)


let srednia =sredniaArytmetyczna(a,b,c,d)
let sumaa = suma(a,b,c,d)
document.write("a = "+a,"<br>")
document.write("b = "+b,"<br>")
document.write("c = "+c,"<br>")
document.write("d = "+d,"<br>")
document.write("<strong>Średnia podanych liczb: </strong>"+srednia.toFixed(3),"<br>")
document.write("<strong>Suma podanych liczb: </strong>"+sumaa.toFixed(3),"<br>")