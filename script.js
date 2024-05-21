const canvas = document.getElementById('boidCanvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Boid {
    constructor() {
        this.position = { x: Math.random() * canvas.width, y: Math.random() * canvas.height };
        this.velocity = { x: Math.random() * 2 - 1, y: Math.random() * 2 - 1 };
    }

    update() {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        if (this.position.x > canvas.width) this.position.x = 0;
        if (this.position.x < 0) this.position.x = canvas.width;
        if (this.position.y > canvas.height) this.position.y = 0;
        if (this.position.y < 0) this.position.y = canvas.height;
    }
draw() {
        context.fillStyle = 'white';
        context.beginPath();
        context.arc(this.position.x, this.position.y, 2, 0, Math.PI * 2);
        context.fill();
    }
}

const boids = [];
for (let i = 0; i < 100; i++) {
    boids.push(new Boid());
}

function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    boids.forEach(boid => {
        boid.update();
        boid.draw();
    });
    requestAnimationFrame(animate);
}

animate();
