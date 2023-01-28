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
                valor: track.trackPrice,
                moneda: track.currency
            }
        }
        formatedJsonSong.push(song);
    });
    return formatedJsonSong;
}

module.exports = { limitedArtistTracks, getTotalAlbum, formatSongs };