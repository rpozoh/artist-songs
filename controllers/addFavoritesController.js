const addFavoritesService = require('../services/addFavoritesService.js');
const getTracksService = require('../services/getTracksService.js');
const addFavoriteSchema = require('../schemas/add-favorite-schema.json');
const Function = require('../utils/functions.js');

const addFavorite = async (req, res) => {
    console.log("FavoriteController.AddFavorite INI");
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    res.setHeader('Allow: GET, POST, OPTIONS');
    const { body } = req;
    const validSong = await getTracksService.getTrackById(body);

    if(!Function.validateSchema(body, addFavoriteSchema)) {
        res.status(400).send({
            status: "FAILED",
            data: {
                error: "El formato del JSON es inválido"
            },
        });
        return;
    }

    if(!validSong) {
        res.status(400).send({
            status: "FAILED",
            data: {
                error: "El id de la canción no existe"
            },
        });
        return;
    }
    
    if(body.nombre_banda.toLowerCase() !== validSong.artistName.toLowerCase()) {
        res.status(400).send({
            status: "FAILED",
            data: {
                error: "El nombre del artista no coincide"
            },
        });
        return;
    }

    const fav = await addFavoritesService.addFavorite(body);

    try {
        res.send(fav);
    } catch (error) {
        res.status(error?.status || 500)
        .send({
            status: "FAILED", data: { error: error?.message || error }
        });
    }
    console.log("FavoriteController.AddFavorite FIN");
    return;
}

module.exports = { addFavorite };