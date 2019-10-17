# I2C Device Detector

Your friendly neighborhood device detector for i2c peripherals.

## Example

Create a `devices.json` file with a listing of possible device addresses and a description as so:

```json
{
    "0x1b": {"description": "QT1070 Touch Sensor" },
    "0x60": {"description": "TLC59116 LED Driver" },
    "0x48": {"description": "MCP9800 Temperature Sensor" },
    "0x50": {"description": "24AA64 EEPROM"},
    "0x68": {"description": "TLC59116 All Call Address" },
}
```

Now you can load the config and use the detector to get a nice overview of the devices:

```js
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
```

Example output:

```text
╔═════════════╤════════════════════════════╗
║ I2C Address │ Description                ║
╟─────────────┼────────────────────────────╢
║    0x1b     │ QT1070 Touch Sensor        ║
╟─────────────┼────────────────────────────╢
║    0x1c     │ unknown                    ║
╟─────────────┼────────────────────────────╢
║    0x48     │ MCP9800 Temperature Sensor ║
╟─────────────┼────────────────────────────╢
║    0x50     │ 24AA64 EEPROM              ║
╟─────────────┼────────────────────────────╢
║    0x60     │ TLC59116 LED Driver        ║
╟─────────────┼────────────────────────────╢
║    0x68     │ TLC59116 All Call Address  ║
╚═════════════╧════════════════════════════╝
```
