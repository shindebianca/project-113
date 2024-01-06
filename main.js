function preload() {

}

function setup() {
    canvas = createCanvas(550,550);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide()
}

function draw() {
    image(video, 0, 0, 640, 480);
    fill("purple")
    circle(50, 50, 40)
    fill("blue")
    rect(70, 45, 400, 10)
    fill("purple")
    circle(450, 50, 40)
    fill("blue")
    rect(445, 65, 10, 350)
    fill("purple")
    circle(445, 415, 40)
    fill("blue")
    rect(40, 405, 390, 10)
    fill("purple")
    circle(50,415,40)
    fill("blue")
    rect(45,65,10,330)
}

function take_snapshot() {
    save("my_emoji.png");
}