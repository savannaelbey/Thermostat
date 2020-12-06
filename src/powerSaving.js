'use strict';

class PowerSaving {
  constructor(mode = 'ON') {
    this.mode = mode
  }

  turnOff() {
    return this.mode = 'OFF'
  }

  turnOn() {
    return this.mode = 'ON'
  }
}
