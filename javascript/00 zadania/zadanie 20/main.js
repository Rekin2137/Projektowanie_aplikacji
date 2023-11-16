const war = document.querySelector('#war')
const wynik = document.querySelector('#wynik')
const btn = document.querySelector('button')

btn.addEventListener('click',function(){

    let kwadrat = Math.pow(parseInt(war.value),2)
    let szescian = Math.pow(parseInt(war.value),3)
    wynik.innerHTML = "Kwadrat liczby: "+kwadrat+"<br>"+"Szeszcian liczby: "+szescian
})