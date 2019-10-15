const DeviceListingGenerator = require('./device_listing_generator');

class I2cDetector {

  constructor(i2c, deviceDescriptors) {
    this.i2c = i2c;
    this.deviceDescriptors = deviceDescriptors;
  }

  scan() {
    let devices = this.i2c.scanSync();
    devices = devices.map( address => `0x${address.toString(16)}`).map(
      address => [
        address,
        this.deviceDescriptors[address] ? this.deviceDescriptors[address] : 'unknown'
      ]
    );
    return devices;
  }

  overview() {
    let devices = this.scan();
    devices.unshift(['I2C Address', 'Description']);
    console.log(DeviceListingGenerator.generate(devices));
  }
}

module.exports = I2cDetector;