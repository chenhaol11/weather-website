const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url =
    'http://api.weatherstack.com/current?access_key=18cd2203e47b8ffdb3eb8c704276d799&query=' +
    latitude +
    ',' +
    longitude;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to location services.', undefined);
    } else if (body.error) {
      callback('Unable to find location.Try another search.', undefined);
    } else {
      callback(
        undefined,
        `${body.current.weather_descriptions}. \nIt is currently ${body.current.temperature} degrees out. \nIt feels like ${body.current.feelslike} degrees out. \nThe humidity is ${body.current.humidity} percent.`
      );
    }
  });
};

module.exports = forecast;
