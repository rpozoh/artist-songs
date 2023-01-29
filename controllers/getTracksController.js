const getTracksService = require('../services/getTracksService.js');
const Functions = require('../utils/functions.js');

const getTracks = async (req, res) => {
    console.log("GetTracksController.GetTracks INI");
    res.setHeader("Access-Control-Allow-Origin", "*");
    const { name } = req.query;

    if(!name) {
        res.status(400).send({
            status: "FAILED",
            data: {
                error: "El nombre del artista es requerido"
            },
        });
        return;
    }

    const getTracks = await getTracksService.getArtistTracks({ name });
    const limitedArtistTracks = getTracks.length > 25 ? Functions.limitedArtistTracks(getTracks) : getTracks;
    const albums = Functions.getTotalAlbum(limitedArtistTracks);
    const totalAlbums = albums.length;
    const songs = Functions.formatSongs(limitedArtistTracks);
    try {
        res.send({
            total_albumes: totalAlbums,
            total_canciones: limitedArtistTracks.length,
            albumes: albums,
            canciones: songs
        });
    } catch (error) {
        res.status(error?.status || 500)
        .send({
            status: "FAILED", data: { error: error?.message || error }
        });
    }
    console.log("GetTracksController.GetTracks FIN");
}

module.exports = { getTracks };