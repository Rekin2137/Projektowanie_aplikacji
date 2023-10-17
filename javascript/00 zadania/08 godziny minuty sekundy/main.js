const  liczba1 = document.querySelector("#sekundy")
const btn = document.querySelector("button")
const wynik = document.querySelector('#wynik')

btn.addEventListener('click',function (){
    let  liczba = parseInt(liczba1.value)
    let g = Math.floor((liczba/3600));
    let gs = liczba%3600;
    let m = Math.floor((gs/60));
    let s = gs%60;

    wynik.innerHTML = "Godziny = "+g+"<br>"+"Minuty = "+m+"<br>"+"Sekundy"+s+"<br>"+g+"g"+m+"m"+s+"s";
})