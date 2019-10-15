const {table} = require('table');

class DeviceListingGenerator {
  static generate(devices) {
    let options = {
      columns: {
        0: {
          alignment: 'center'
        }
      }
    };
    return table(devices, options);
  }
}

module.exports = DeviceListingGenerator;