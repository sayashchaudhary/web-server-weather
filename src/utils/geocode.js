const request = require('postman-request');

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?&access_token=pk.eyJ1Ijoic2F5YXNoY2hhdWRoYXJ5IiwiYSI6ImNrOHEwM3ZpMTAwOGYzZ29pM25lazB5bWUifQ.ippMYsFD1UUljqd9NDZTIQ&limit=1'
    request({ url, json: true }, (err, { body } = {}) => {
        if (err) {
            callback('Unable to connect to location services', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
};

module.exports = geocode;
