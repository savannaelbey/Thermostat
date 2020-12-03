'use strict';

describe('Temperature', function() {
  var temp;

  beforeEach(function () {
    temp = new Temperature();
  });

  it('has a default temp of 20', function() {
    expect(temp.currentTemp).toEqual(20);
  });

  it('can be increased up', function() {
    expect(temp.up()).toEqual(21);
  });

  it('can be decreased down', function() {
    expect(temp.down()).toEqual(19)
  });

  it('has a minimum value set at 10 degrees', function() {
    expect(temp.minTemp).toEqual(10)
  });
});
