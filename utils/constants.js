class Constants {
    
    get port() {
        return 3000;
    }

    get getTracks() {
        return '/search_tracks';
    }

    get favorites() {
        return '/favoritos';
    }

    get apiBase() {
        return 'https://itunes.apple.com/search?term=';
    }
}

module.exports = new Constants(); 