const wyn = document.getElementById('wynik')
const input = document.getElementById('in1')
const btn = document.querySelector('button')


btn.addEventListener('click', function(){

    let x =     parseInt(input.value)
    switch (x){
        case 1:

            wyn.innerHTML = "Poniedzialek"
            break;
        case 2:
           wyn.innerHTML = "Wtorek"
            break;
        case 3:

            wyn.innerHTML = "Środa"
            break;
        case 4:

            wyn.innerHTML = "Czwartek"
            break;
        case 5:

            wyn.innerHTML = "Piątek"
            break;
        case 6:
            wyn.innerHTML = "Sobota"
            break;
        case 7:
            wyn.innerHTML = "Niedziela"
            break;
        default:

            wyn.innerHTML = "Błąd"
            break;
    }

})
