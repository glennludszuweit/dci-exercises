///// 1. Person Class /////
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  describe() {
    return `${this.name}, ${this.age} years old.`;
  }
}

let person1 = new Person('Phil', 32);

console.log(person1.describe());

///// 2. Volume /////
class Cylinder {
  constructor(radius, height) {
    this.radius = radius;
    this.height = height;
  }

  calcVolume() {
    const cylinderVolume = Math.pow(this.radius, 2) * Math.PI * this.height;
    return Math.round((cylinderVolume + Number.EPSILON) * 100) / 100;
    //return cylinderVolume.toFixed(4);
  }
}

let cylinder1 = new Cylinder(12.7, 10.5);

console.log(cylinder1.calcVolume());

///// 3. Tick Tock /////
class Clock {
  constructor({ template, text }) {
    this.timer;
    this.text = text;
    this.template = template;
  }

  render() {
    let date = new Date();
    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output =
      this.template.replace('h', hours).replace('m', mins).replace('s', secs) +
      ' ' +
      this.text;

    console.log(output);
  }

  start() {
    this.render();
    this.timer = setInterval(() => {
      this.render;
    }, 1000);
  }

  stop() {
    clearInterval(this.timer);
  }
}

let clock1 = new Clock({ template: 'h:m:s', text: "o'clock" });
clock1.start();

////// 4. TV Class /////
class TV {
  constructor(brand) {
    this.brand = brand;
    this.resetTV();
  }

  upVolume() {
    if (this.volume < 100) {
      return this.volume++;
    }
  }

  downVolume() {
    if (this.volume > 0) {
      return this.volume--;
    }
  }

  setRandomChannel() {
    return (this.channel = Math.floor(1 + Math.random() * 50));
  }

  resetTV() {
    this.channel = 1;
    this.volume = 50;
  }

  info() {
    return `${this.brand} at channel ${this.channel}, volume ${this.volume}`;
  }
}

let tv1 = new TV('Philips');

tv1.upVolume();
tv1.upVolume();

// tv1.downVolume();
// tv1.downVolume();

tv1.setRandomChannel();

// tv1.resetTV();

console.log(tv1.info());
