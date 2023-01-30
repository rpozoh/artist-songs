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

    get localhost() {
        return 'http://localhost:3000';
    }
}

module.exports = new Constants(); 