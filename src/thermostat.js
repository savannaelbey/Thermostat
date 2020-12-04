'use strict';

class Thermostat {
  constructor() {
    var temperature = new Temperature();
    var powerSaving = new PowerSaving();
    this.temp = temperature.currentTemp;
    this.powerSavingMode = powerSaving.mode
  }
}
