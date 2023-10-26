let a = prompt("podaj liczbe a","0");
a = parseInt(a)
let b = prompt("podaj liczbe b","0");
b = parseInt(b)
let c = prompt("podaj liczbe c","0");
c = parseInt(c)
let d = prompt("podaj liczbe d","0");
d = parseInt(d)

let iloczyn = a*b*c*d;
console.log(iloczyn)
let srednia_geometryczna = Math.pow(iloczyn,0.25) ;
document.write("a = "+a,"<br>")
document.write("b = "+b,"<br>")
document.write("c = "+c,"<br>")
document.write("d = "+d,"<br>")
document.write("<strong>Średnia geometryczna podanych liczb: </strong>"+srednia_geometryczna,"<br>")
document.write("<strong> Zaokrąglona średnia geometryczna podanych liczb: </strong>"+srednia_geometryczna.toFixed(2),"<br>")