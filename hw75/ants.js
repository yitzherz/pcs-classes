(function () {
    'use strict';

    const canvas = document.getElementById('theCanvas');
    const colorChooser = document.getElementById('color');
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();


    class Ant {

        static SIZE = 2; // jshint ignore:line

        constructor(context, color = 'black') {
            this.x = canvas.width / 2;
            this.y = canvas.height / 2;
            this.color = color;
            this.context = context;
            this.brains = 0;
            this.draw();
        }

        draw() {
            this.context.beginPath();
            this.context.fillRect(this.x, this.y, Ant.SIZE, Ant.SIZE);
            context.fillStyle = this.color;
        }


        move() {
            if (--this.brains <= 0) {
                this.moveX = Ant.getRandomNumber(-1, 1);
                this.moveY = Ant.getRandomNumber(-1, 1);
                this.brains = Ant.getRandomNumber(1, 1000);

            }
            this.x += this.moveX;
            this.y += this.moveY;
            if (this.x < Ant.SIZE) {
                this.x = Ant.SIZE;
            } else if (this.x > canvas.width - Ant.SIZE) {
                this.x = canvas.width - Ant.SIZE;
            }

            if (this.y < Ant.SIZE) {
                this.y = Ant.SIZE;
            } else if (this.y > canvas.height - Ant.SIZE) {
                this.y = canvas.height - Ant.SIZE;
            }

            this.draw();
        }


        static getRandomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }


    }

    const context = canvas.getContext('2d');
    const ants = [];
    for (let i = 0; i < 50000; i++) {
        ants.push(new Ant(context));
    }

    setInterval(() => {
        context.clearRect(0, 0, canvas.width, canvas.height);
        ants.forEach(ant => ant.move());
    }, 100);

    document.getElementById('add').addEventListener('click', () => {
        ants.push(new Ant(context, colorChooser.value));
    });

}());