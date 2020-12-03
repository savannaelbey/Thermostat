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
});
