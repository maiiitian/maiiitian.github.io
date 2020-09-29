 //辅助函数，控制下面范围
 function randomIntFromRange(low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
}
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
/*
window.addEventListener('mousedown',function (event){
    init();
});
*/
window.addEventListener('resize',function (event){
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
   init();
});

let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let Gravity = 0.5;

function Ball(x, y, dx, dy, radius, color,opacity) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = color;
    this.opacity = opacity;

    this.draw = function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.globalAlpha=this.opacity;
        ctx.closePath();
    }
    this.update = function () {
        if (this.radius + this.y < canvas.height ) {
            this.y += this.dy;
        }
        this.x += this.dx;
        this.draw();
    }
}

let ballArray;
let num = 0; 

function init() {
    ballArray = [];
    for (let i = 0; i < 100; i++) {
        num += 100;
        let radius = randomIntFromRange(1, 4);
        let x = randomIntFromRange(radius, canvas.width - radius);
        let y = randomIntFromRange(radius, canvas.height - radius);
        let dx = 0;
        let dy = getRandomArbitrary(0.5,1);
        let color = '#000';
        let opacity = Math.random();
        ballArray.push(new Ball(x, y, dx, dy, radius, color,opacity));
    }
}


function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let ball of ballArray) {
        ball.update();
    }
}

init();
animate();