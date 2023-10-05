const a = document.querySelector('#liczba_a');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function (){
    let liczba_a = parseInt(a.value);
    let f = 32 + (9/5)*liczba_a
    let k = liczba_a + 273

wynik.innerHTML = "Stopnie w celcjuszach = "+liczba_a+"<br>"+"w farenheitach: "+f+"<br>"+"w kelwinach: "+k;
})