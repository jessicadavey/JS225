function makeCar(accelerateRate, brakeRate) {
  return { 
    speed: 0, 
    accelerateRate,
    brakeRate,
    accelerate() {
      this.speed += this.accelerateRate;
    },
    brake() {
      this.speed -= this.brakeRate;
      if (this.speed < 0) {
        this.speed = 0;
      }
    }
  };
}

// let sedan = makeCar(8);
// sedan.accelerate();
// console.log(sedan.speed);

// let coupe = makeCar(12);
// coupe.accelerate();
// console.log(coupe.speed);

// let hatchback = makeCar(9);
// hatchback.accelerate();
// console.log(hatchback.speed);

let sedan = makeCar(8, 6);
sedan.accelerate();
console.log(sedan.speed);

sedan.brake();
console.log(sedan.speed);

sedan.brake();
console.log(sedan.speed);