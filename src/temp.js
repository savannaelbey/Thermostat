'use strict';

class Temperature {
  constructor() {
    this.currentTemp = 20;
    this.minTemp = 10
  }

  up() {
    this.currentTemp += 1
    return this.currentTemp;
  }

  down() {
    this.currentTemp -= 1
    return this.currentTemp;
  }
}
