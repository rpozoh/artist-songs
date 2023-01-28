const tracks = require('../data/tracks.js');

const getArtistTracks = async (params) => {
    try {
        const artistTracks = await tracks.getArtistTracks(params);
        return artistTracks;
    } catch(error) {
        throw error;
    }
}

module.exports = { getArtistTracks };