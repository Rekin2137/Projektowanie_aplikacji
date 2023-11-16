
const btn = document.querySelector('#oblicz')
const wynik = document.querySelector('#wynik')
const btn2 = document.getElementById('sprawdz')

btn.addEventListener('click', function (){


    let liczba1 = parseInt(Math.floor(Math.random() * 11))
    let liczba2 = parseInt(Math.floor(Math.random() * 11))


    wynik.innerHTML = liczba1+" * "+liczba2+" = "+"<input type='number' id='sprawdzaj'>"

    const wynikk = document.getElementById('wynik2')
    const x = document.getElementById('sprawdzaj')
    btn2.addEventListener('click', function (){
        let x1 = parseInt(x.value)
        if (liczba1 * liczba2 != x1) {
            wynikk.innerHTML = "Zle"
        } else {
            wynikk.innerHTML = "Dobrze"
        }

    })

})