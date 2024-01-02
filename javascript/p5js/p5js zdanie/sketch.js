let kolorWypelnienia = "niebieski"; // Początkowy kolor wypełnienia

function setup() {
    createCanvas(1400, 700);
    background(220);
    stroke(kolorWypelnienia);


    let przyciskZielony = document.getElementById("zielonyButton");
    let przyciskNiebieski = document.getElementById("niebieskiButton");
    let przyciskCzerwony = document.getElementById("czerwonyButton");
    let reset = document.getElementById("reset");

    przyciskZielony.addEventListener("click", () => zmienKolorWypelnienia([0,255,0]));
    przyciskNiebieski.addEventListener("click", () => zmienKolorWypelnienia([0,0,255]));
    przyciskCzerwony.addEventListener("click", () => zmienKolorWypelnienia([255,0,0]));
    reset.addEventListener("click", () => resetuj() )
}
function draw(){
    stroke(kolorWypelnienia);
    if(mouseIsPressed){
        strokeWeight(50)
        point(mouseX,mouseY)
    }


}
function resetuj(){

    background(220);
}
function zmienKolorWypelnienia(kolor) {

    kolorWypelnienia = kolor;





}