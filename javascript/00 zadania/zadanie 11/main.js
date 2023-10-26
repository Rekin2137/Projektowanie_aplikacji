const war = document.querySelector('#war')
const proc = document.querySelector('#pro')
const wynik = document.querySelector('#wynik')
const btn = document.querySelector('button')

btn.addEventListener('click',function(){
    let wartosc = parseInt(war.value)
    let procent = parseInt(proc.value)

    let wyn = (wartosc*procent)/100
    wynik.innerHTML = procent+"%"+" z "+wartosc+" to: "+wyn
})