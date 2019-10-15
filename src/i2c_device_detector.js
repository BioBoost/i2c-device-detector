const DeviceListingGenerator = require('./device_listing_generator');

class I2cDetector {

  constructor(i2c, deviceDescriptors) {
    this.i2c = i2c;
    this.deviceDescriptors = deviceDescriptors;
    this.devices = [];
  }

  scan() {
    this.devices = this.i2c.scanSync();
    this.devices = this.devices.map( address => `0x${address.toString(16)}`).map(
      address => [
        address,
        this.deviceDescriptors[address] ? this.deviceDescriptors[address].description : 'unknown'
      ]
    );
    this.devices.unshift(['I2C Address', 'Description']);
    return this.devices;
  }

  overview() {
    return DeviceListingGenerator.generate(this.devices);
  }
}

module.exports = I2cDetector;