const x = document.querySelector('#in1')
const btn = document.querySelector('button')
const wynik = document.querySelector('#wynik')

btn.addEventListener('click', function (){
    let x1 = parseInt(x.value)
    let tabliczka0 = x1*0
    let tabliczka1 = x1*1
    let tabliczka2 = x1*2
    let tabliczka3 = x1*3
    let tabliczka4 = x1*4
    let tabliczka5 = x1*5
    let tabliczka6 = x1*6
    let tabliczka7 = x1*7
    let tabliczka8 = x1*8
    let tabliczka9 = x1*9
    let tabliczka10 = x1*10

    wynik.innerHTML = "x = "+x1+"<br>"+"<br>"+"0 x "+x1+" = 0"+"<br>"+"<br>"+"1 x "+x1+" = "+tabliczka1+"<br>"+"<br>"+"2 x "+x1+" = "+tabliczka2+"<br>"+"<br>"+"3 x "+x1+" = "+tabliczka4+"<br>"+"<br>"+"5 x "+x1+" = "+tabliczka5+"<br>"+"<br>"+"6 x "+x1+" = "+tabliczka6+"<br>"+"<br>"+"7 x "+x1+" = "+tabliczka7+"<br>"+"<br>"+"8 x "+x1+" = "+tabliczka8+"<br>"+"<br>"+"9 x "+x1+" = "+tabliczka9+"<br>"+"<br>"+"10 x "+x1+" = "+tabliczka10+"<br>"


})