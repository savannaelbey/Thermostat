$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  $('#temperature-up').click(function() {
    thermostat.increaseTemp();
    updateTemperature();
  });

  $('#temperature-down').click(function() {
    thermostat.decreaseTemp();
    updateTemperature();
  });

  $('#temperature-reset').click(function() {
    thermostat.reset();
    updateTemperature();
  });

  $('#powersaving-on').click(function() {
    thermostat.turnPsmOn();
    $('#power-saving').text('ON')
    updateTemperature();
  })

  $('#powersaving-off').click(function() {
    thermostat.turnPsmOff();
    $('#power-saving').text('OFF')
    updateTemperature();
  })

  function updateTemperature() {
    $('#temperature').text(thermostat.temp);
  };
});
