const Function = require('../utils/functions.js');

const addFavorite = (body) => {
    try {
        const fav = Function.setFavorite(body);
        return fav;
    } catch (error) {
        throw { status: 500, message: error };
    }
}

module.exports = { addFavorite };