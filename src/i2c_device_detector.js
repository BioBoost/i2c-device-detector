class I2cDetector {

  constructor(i2c) {
    this.i2c = i2c;
  }

  scan() {
    this.devices = this.i2c.scanSync();
  }

  overview() {
    console.log(this.devices);
  }
}

module.exports = I2cDetector;