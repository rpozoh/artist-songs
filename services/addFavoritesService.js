const favorites = require('../data/favorites.js');

const addFavorite = (body) => {
    console.log("FavoriteService.AddFavorite INI");
    try {
        const fav =  favorites.addFavorite(body);
        console.log("FavoriteService.AddFavorite FIN");
        return fav;
    }  catch(error) {
        throw error;
    }
}

module.exports = { addFavorite };