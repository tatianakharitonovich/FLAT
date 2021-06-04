class Device {
	constructor(name,power) {
  	this.name = name;
    this.power = power;
  }
}

class Teapot extends Device {
	constructor(name,power,color,volume) {
  	super(name, power);
    this.color = color;
    this.volume = volume;
  }
}

class Microwave extends Device {
	constructor(name,power,color,volume) {
  super(name, power);
  this.color = color;
  this.volume = volume;
  }
}

class TV extends Device {
	constructor(name,power,diagonal,resolution) {
  	super(name, power);
    this.diagonal = diagonal;
    this.resolution = resolution;
  }
}

class Refrigerator extends Device {
	constructor(name,power,color,height) {
  	super(name, power);
    this.color = color;
    this.height = height;
  }
}

class Washer extends Device {
	constructor(name,power,color,capacity) {
  	super(name, power);
    this.color = color;
    this.capacity = capacity;
  }
}

class Flat {
	#maxPower = 6000;
	constructor(number,devices) {
  	this.number = number;
  	this.devices = devices;
  }
  
  add (device) {
  	this.devices.push(device);    
  }
  
  plugIn(deviceOn) {
  	this.devices.forEach(device => device == deviceOn ? device.plugIn = true : device = device )
    let devicePowerOn = this.devices.filter(device => device.plugIn == true).map(device => device.power);
  	if (devicePowerOn.reduce((sum, power) => sum + power, 0) > this.#maxPower) {
  	  this.devices.forEach(device => device.plugIn = false);
  	  console.log('Суммарная потребляемая мощность превышает заданое значение. Все приборы выключены!');
  	}
  }
   
  listSwitchOn () {
  	return this.devices.filter(device => device.plugIn == true);
  }
  
  sumPower () {
  	let devicePowerOn = this.devices.filter(device => device.plugIn == true).map(device => device.power);
    return devicePowerOn.reduce((sum, power) => sum + power, 0);
    
  }
  
  sortPower () {
  	return this.devices.filter(device => device.plugIn == true).sort ((device1, device2) => device1.power - device2.power);
  }
  
  findPower (a,b) {
  	return this.devices.filter(device => device.power > a && device.power < b);
  }
  
 }

let flat = new Flat(123, []);

let teapot = new Device('Чайник', 2000);
let tv = new Device('Телевизор', 3000);
let washer = new Device('Стиральная машина', 4000)

flat.add(teapot);
flat.add(tv);
flat.add(washer);
flat.plugIn(tv);
flat.plugIn(teapot);
flat.plugIn(washer);
flat.plugIn(tv);
flat.plugIn(teapot);


console.log(flat);
console.log(flat.listSwitchOn());
console.log(flat.sumPower());
console.log(flat.sortPower());
console.log(flat.findPower(1000,3000));
