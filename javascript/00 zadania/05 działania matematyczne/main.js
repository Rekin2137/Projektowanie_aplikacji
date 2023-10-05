const liczba1 = document.querySelector('#liczba1');
const liczba2 = document.querySelector('#liczba2');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click',function (){
 let a = parseInt(liczba1.value);
 let b = parseInt(liczba2.value);
 let iloraz = a/b;
 let suma = a+b;
 let roznica = a-b;
 let iloczyn = a*b;

 wynik.innerHTML = "A = "+a+"<br>"+
                    "B = "+b+"<br>"+
            "iloraz = "+iloraz+"<br>"+
            "suma = "+suma+"<br>"+
            "roznica  = "+roznica+"<br>"+
              "iloczyn = "+iloczyn+"<br>";// do poprawy
} )