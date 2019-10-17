const Detector = require('../src/i2c_device_detector');
const i2c = require('i2c-bus');
const fs = require('fs');

const i2cbus = i2c.open(1, (err) => {
  if (err) throw err;
  console.log("Opened i2c bus successfully");

  let devices = JSON.parse(fs.readFileSync('devices.json'));
  let detector = new Detector(i2cbus, devices);

  console.log("Basic overview")
  console.log(detector.scan());

  console.log("Or a nice table:");
  console.log(detector.overview());
});