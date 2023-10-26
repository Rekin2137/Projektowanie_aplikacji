function setup(){
    createCanvas(1200,700);
    background('grey')
}

let x = 200;
let y = 200;
function draw(){
    fill(random(1,255),random(1,255),random(1,255))
    let dryg = random(-50,50)

    ellipse(x + dryg,y+dryg,300,200)
    noFill()
    fill(221,90,24)
    ellipse(360,250,80,80)
    fill('blue')
    rect(360,175,150,150)

    ellipse(mouseX,mouseY,80,80)


}