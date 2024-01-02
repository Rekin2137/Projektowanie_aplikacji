const btn1 = document.querySelector("#t221W")
const btn2 = document.querySelector("#t222W")
const btn3 = document.querySelector("#t223W")
const btn4 = document.querySelector("#t224W")
const btn5 = document.querySelector("#t225W")
const input1 = document.querySelector("#in1")
const input2 = document.querySelector("#in2")
const wynik1 = document.querySelector("#t221")
const wynik2 = document.querySelector("#t222")
const wynik3 = document.querySelector("#t223")
const wynik4 = document.querySelector("#t224")
const wynik5 = document.querySelector("#t225")


function bezwzglnd(a){
    if(a <0){

        a = -2*a
    }
    return a;
}
function  potega(a,b){
    re
}
btn1.addEventListener('click', function (){
    let a = parseInt(input1.value)

    wynik1.innerHTML = "Wartość bezwzględna pierwszej liczby wynosi:"+bezwzglnd(a);;
})
btn2.addEventListener('click',function (){
    let a = parseInt(input1.value)
    let b = parseInt(input2.value)
})

