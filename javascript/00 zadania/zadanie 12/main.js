const war = document.querySelector('#war')
const proc = document.querySelector('#pro')
const wynik = document.querySelector('#wynik')
const btn = document.querySelector('button')

btn.addEventListener('click',function(){
    let wartosc = parseInt(war.value)
    let procent = parseInt(proc.value)
    let min = wartosc
    let max = procent

    let p1 = Math.floor(Math.random()*(max-min +1 ))+min;
    let p2 = Math.floor(Math.random()*(max-min +1 ))+min;
    let p3 = Math.floor(Math.random()*(max-min +1 ))+min;
    let p4 = Math.floor(Math.random()*(max-min +1 ))+min;
    let p5 = Math.floor(Math.random()*(max-min +1 ))+min;

    let suma = p1+p2+p3+p4+p5
    let iloczyn = p1*p2*p3*p4*p5
    let iloraz = p1/p2/p3/p4/p5
    let roznica = p1-p2-p3-p4-p5
    let srednia = (suma)/5
    wynik.innerHTML = "liczba 1: "+p1+"<br>"+"liczba 2: "+p2+"<br>"+"liczba 3: "+p3+"<br>"+"liczba 4: "+p4+"<br>"+"liczba 5: "+p5+"<br>"+"suma "+suma+"<br>"+"iloczyn "+iloczyn+"<br>"+"iloraz "+iloraz+"<br>"+"roznica "+roznica+"<br>"+"srednia "+srednia
})