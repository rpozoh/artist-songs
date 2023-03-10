const Constants = require('../utils/Constants.js');
const axios = require('axios');

const getArtistTracks = (params) => {
    try {
        return axios.get(Constants.apiBase + params.name)
        .then(response => {
            const artistTracks = response.data.results.filter(results => {
                return results.artistName.toLowerCase() === params.name.toLowerCase();
            });
            return artistTracks;
        });
    } catch (error) {
        throw { status: 500, message: error };
    }
}

const getArtistTrack = (id) => {
    try {
        return axios.get(Constants.apiBase + id)
        .then(response => {
            const artistTrack = response.data.results.filter(results => {
                return results.trackId === id;
            });
            return artistTrack;
        })
    } catch (error) {
        throw { status: 500, message: error };
    }
}


module.exports = { getArtistTracks, getArtistTrack };