// Named function for Fahrenheit to Celsius conversion
function convertFahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * (5 / 9);
}

// Anonymous function for Fahrenheit to Kelvin conversion
const convertFahrenheitToKelvin = function (fahrenheit) {
  return (fahrenheit - 32) * (5 / 9) + 273.15;
};

// jQuery ready function to ensure DOM is fully loaded
$(document).ready(function () {
  // Button click event for converting to Celsius
  $('#convertToCelsius').on('click', function () {
    const fahrenheitInput = $('#fahrenheit').val();

    // Check if the input is empty or not a number
    if (fahrenheitInput === '' || isNaN(fahrenheitInput)) {
      $('#error').text('Please enter a valid number.');
      return; // Exit the function if input is invalid
    }

    // Conversion to Celsius
    const celsiusResult = convertFahrenheitToCelsius(parseFloat(fahrenheitInput));
    $('#resultInCelsius').html(`<p>${fahrenheitInput}&deg;F is ${celsiusResult.toFixed(2)}&deg;C </p>`);
  });

  // Button click event for converting to Kelvin
  $("#convertToKelvin").on('click', function () {
    const fahrenheitInput = $('#fahrenheit').val();

    // Check if the input is empty or not a number
    if (fahrenheitInput === '' || isNaN(fahrenheitInput)) {
      $('#error').text('Please enter a valid number.');
      return; // Exit the function if input is invalid
    }

    // Conversion to Kelvin
    const kelvinResult = convertFahrenheitToKelvin(parseFloat(fahrenheitInput));
    $('#resultInKelvin').html(`<p>${fahrenheitInput}&deg;F is ${kelvinResult.toFixed(2)} K</p>`);
  });

  // Reset button functionality
  $("#reset").on('click', function () {
    $("#fahrenheit").val(''); // Clear the input field
    $("#resultInCelsius").text("");
    $("#resultInKelvin").text("");
    $('#error').text(''); // Also clear any error message
  });

  // Input event to clear the error message when the user starts typing
  $('#fahrenheit').on('input', function () {
    if ($('#error').text() !== '') {
      $('#error').text(''); // Clear the error message if it's not empty
    }
  });
});
