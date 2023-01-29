var Validator = require('jsonschema').Validator;
const _favoriteSong = require('../DTO/favoriteSongsDTO.js');
const { redisClient } = require('../middlewares/middleware.js');

const limitedArtistTracks = (artistTracks) => {
    const limitedArtistTracks = [];
    for(trackIndex = 0; trackIndex < 25; trackIndex++) {
        limitedArtistTracks.push(artistTracks[trackIndex]);
    }
    return limitedArtistTracks;
}

const getTotalAlbum = (artistTracks) => {
    const albums = [];
    const uniqueAlbum = {};
    for(trackIndex = 0; trackIndex < artistTracks.length; trackIndex++) {
        if(!(artistTracks[trackIndex].collectionName in uniqueAlbum)) {
            uniqueAlbum[artistTracks[trackIndex].collectionName] = 1;
            albums.push(artistTracks[trackIndex].collectionName);
        }
    }
    return albums;
}

const formatSongs = (artistTracks) => {
    const formatedJsonSong = [];
    let song = {};
    artistTracks.forEach(track => {
        song = {
            cancion_id: track.trackId,
            nombre_album: track.collectionName,
            nombre_tema: track.trackName,
            preview_url: track.previewUrl,
            fecha_lanzamiento: track.releaseDate.split("T")[0],
            precio: {
                valor: track.trackPrice ? track.trackPrice : track.collectionPrice,
                moneda: track.currency
            }
        }
        formatedJsonSong.push(song);
    });
    return formatedJsonSong;
}

const validateSchema = (json, schema) => {
    var validJson = new Validator();
    return validJson.validate(json, schema).valid;
}

const setFavorite = async (body) => {
    let song = {
        nombre_banda: body.nombre_banda,
        cancion_id: body.cancion_id,
        usuario: body.usuario,
        ranking: body.ranking
    }
    //await redisClient.connect();
    //await redisClient.lPush('favorite', song);
    //await redisClient.disconnect();
    _favoriteSong.favoriteSongs.push(song);
    //console.log(cache.redisClient.hGetAll('favorite'));
    return _favoriteSong;
}

module.exports = { limitedArtistTracks, getTotalAlbum, formatSongs, validateSchema, setFavorite };