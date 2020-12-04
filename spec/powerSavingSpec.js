'use strict';

describe('Power saving', function() {
  var powerSaving;

  beforeEach(function() {
    powerSaving = new PowerSaving();
  });

  it('defaults to ON', function() {
    expect(powerSaving.mode).toBe(on);
  });
});
