'use strict';

describe('Thermostat', function() {
  var temp;
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
    temp = jasmine.createSpyObj('temp', ['currentTemp']);
  });

  it('sets a default temp of 20 degrees celcius', function () {
    expect(thermostat.temp).toEqual(20);
  });

  it('has a power saving mode that is ON by default', function() {
    expect(thermostat.powerSavingMode).toBe('ON')
  });

  it('can turn the power saving mode OFF', function() {
    thermostat.turnPsOff()
    expect(thermostat.powerSavingMode).toBe('OFF')
  });
});
