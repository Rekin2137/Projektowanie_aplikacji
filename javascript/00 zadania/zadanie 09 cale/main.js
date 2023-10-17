const cale = document.querySelector('#cale')
const wynik = document.querySelector('#wynik')
const btn = document.querySelector('button')

btn.addEventListener('click',function (){
    let calee = parseInt(cale.value)
    let mili = calee*25.3995

wynik.innerHTML = calee+" cali to "+mili+" mm."
})