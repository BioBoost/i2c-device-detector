const {table} = require('table');

class DeviceListingGenerator {
  static generate(devices) {
    let config = {
    };
    return table(devices, config);
  }
}

module.exports = DeviceListingGenerator;