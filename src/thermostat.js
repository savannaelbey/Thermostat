'use strict';

class Thermostat {
  constructor() {
    var temperature = new Temperature();
    this.temp = temperature.currentTemp;
  }
}
