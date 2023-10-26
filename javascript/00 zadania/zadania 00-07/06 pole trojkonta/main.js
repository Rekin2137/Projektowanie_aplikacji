const a = document.querySelector('#liczba_a');
const b = document.querySelector('#liczba_b');
const c = document.querySelector('#liczba_c');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function (){
    let liczba_a = parseInt(a.value);
    let liczba_b = parseInt(b.value);
    let liczba_c = parseInt(c.value);
    let p = (1/2)*(liczba_a+liczba_b+liczba_c);
    let s = Math.sqrt(p*(p-liczba_a)*(p-liczba_b)*(p-liczba_c));
    console.log(s)

wynik.innerHTML = "A = "+liczba_a+"<br>"+"B = "+liczba_b+"<br>"+"C ="+liczba_c+"<br>"+"pole = "+s;
})