const tracks = require('../data/tracks.js');

const getArtistTracks = async (params) => {
    console.log("GetTracksService.GetArtistTracks INI");
    try {
        const artistTracks = await tracks.getArtistTracks(params);
        console.log("GetTracksService.GetArtistTracks FIN");
        return artistTracks;
    } catch(error) {
        throw error;
    }
}

const getTrackById = async (params) => {
    console.log("GetTracksService.getTrackById INI");
    try {
        const artistTrack = await tracks.getArtistTrack(params.cancion_id);
        console.log("GetTracksService.getTrackById FIN");
        return artistTrack[0];
    } catch(error) {
        throw error;
    }
}

module.exports = { getArtistTracks, getTrackById };