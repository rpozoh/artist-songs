const getTracksService = require('../services/getTracksService.js');

const getTracks = async (req, res) => {
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

    try {
        const getTracks = await getTracksService.getArtistTracks({ name });
        res.send({
            total_albumes: '',
            total_canciones: getTracks.length,
            data: getTracks
        });
    } catch (error) {
        res.status(error?.status || 500)
        .send({
            status: "FAILED", data: { error: error?.message || error }
        });
    }
}

module.exports = { getTracks };