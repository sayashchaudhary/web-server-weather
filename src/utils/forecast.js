const request = require('postman-request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=a4578329521b9467bd35ca3a50028ea2&query=' + latitude + ',' + longitude;
    request({ url, json: true }, (err, { body } = {}) => {
        if (err) {
            callback('Unable to connect weather services', undefined)
        } else if (body.error) {
            callback('Unable to find the location', undefined)
        } else {
            callback(undefined, {
                temperature: body.current.temperature,
                feels_like: body.current.feelslike
            })
        }
    })
};

module.exports = forecast;
