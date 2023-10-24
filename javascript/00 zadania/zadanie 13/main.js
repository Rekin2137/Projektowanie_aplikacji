const x = document.querySelector('#x1')
const btn = document.querySelector('button')
const wynik = document.querySelector('#wynik')

btn.addEventListener('click', function (){
    let x1 = parseInt(x.value)
    let dzialanie = Math.sqrt(Math.abs(x1)*Math.atan(x1)*(x1/(1+Math.pow(x1,2))-2))

    wynik.innerHTML = "Wartość wyrażenia = "+dzialanie
})