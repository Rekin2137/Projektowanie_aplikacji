const wyn = document.getElementById('wynik')
const input = document.getElementById('in1')
const btn = document.querySelector('button')


btn.addEventListener('click', function(){

    let x = Math.floor(parseInt(input.value)/10)
    switch (x){
        case 10:
            x = 5
            wyn.innerHTML = "Ocena: "+x
            break;
        case 9:
            x = 5
            wyn.innerHTML = "Ocena: "+x
            break;
        case 8:
            x = 4.5
            wyn.innerHTML = "Ocena: "+x
            break;
        case 7:
            x = 4
            wyn.innerHTML = "Ocena: "+x
            break;
        case 6:
            x = 3
            wyn.innerHTML = "Ocena: "+x
            break;
        default:
            x= 2
            wyn.innerHTML = "Ocena: "+x
            break;
    }

})
