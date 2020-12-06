'use strict';

describe('Thermostat', function() {
  var temp;
  var thermostat;
  var powerSaving;

  beforeEach(function() {
    thermostat = new Thermostat();
    temp = jasmine.createSpyObj('temp', ['currentTemp']);
    powerSaving = jasmine.createSpyObj('powerSaving', ['turnOff']);
  });

  it('sets a default temp of 20 degrees celcius', function () {
    expect(thermostat.temp).toEqual(20);
  });

  it('can increase temperature with increaseTemp function', function() {
    thermostat.increaseTemp();
    expect(thermostat.temp).toEqual(21)
  });

  it('can decrease temperature with decreaseTemp function', function() {
    thermostat.decreaseTemp();
    expect(thermostat.temp).toEqual(19)
  });

  it('has a minimum temp of 10 degrees celsius set', function() {
    for (var i = 0; i < 11; i++) {
      thermostat.decreaseTemp();
    }
    expect(thermostat.temp).toEqual(10)
  });

  it('has power saving mode that is ON by default', function() {
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  it('can turn the power saving mode OFF', function() {
    thermostat.turnPsmOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
  });

  it('can turn the power saving mode back ON', function() {
    thermostat.turnPsmOff();
    thermostat.turnPsmOn();
    expect(thermostat.isPowerSavingModeOn()).toEqual(true);
  });

  it('has a maximum temperature of 25 degrees when PSM is ON', function() {
   for (var i = 0; i < 6; i++) {
     thermostat.increaseTemp();
    }
   expect(thermostat.temp).toEqual(25);
  });

  it('has a maximum temperature of 32 degrees when PSM is OFF', function() {
   for (var i = 0; i < 13; i++) {
     thermostat.turnPsmOff()
     thermostat.increaseTemp();
    }
   expect(thermostat.temp).toEqual(32);
  });

  it('can be reset back to default temp of 20', function() {
    thermostat.increaseTemp();
    thermostat.reset();
    expect(thermostat.temp).toEqual(20);
  });
});
