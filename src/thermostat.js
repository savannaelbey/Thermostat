'use strict';

class Thermostat {
  constructor() {
    this.DEFAULT_TEMP =20
    this.temp = this.DEFAULT_TEMP;
    this.MINTEMP = 10;
    this.powerSavingMode = 'ON';
    this.MAXTEMP_PSM_ON = 25;
    this.MAXTEMP_PSM_OFF = 32;
  }

  increaseTemp() {
    if (this.isMaximumTemp()) {
      return;
    }
    this.temp += 1
  }

  decreaseTemp() {
    if (this.isMinimumTemp()) {
      return;
    }
    this.temp -= 1
  }

  isMinimumTemp() {
    return this.temp === this.MINTEMP;
  }

  isMaximumTemp() {
    if (this.isPowerSavingModeOn() === true) {
      return this.temp === this.MAXTEMP_PSM_ON;
    }
    return this.temp === this.MAXTEMP_PSM_OFF;
  }

  isPowerSavingModeOn() {
    return this.powerSavingMode === 'ON';
  }

  turnPsmOff() {
    this.powerSavingMode = 'OFF';
  }

  turnPsmOn() {
    this.powerSavingMode = 'ON';
  }

  reset() {
    this.temp = this.DEFAULT_TEMP;
  }
}
