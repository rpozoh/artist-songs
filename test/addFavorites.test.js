const request = require('supertest');
const expect = require('chai').expect;
const chai = require('chai');
const schemaFavorite = require('../schemas/add-favorite-schema.json');
const favoriteData = require('../data/favoriteTestData.json');
const favoriteDataError = require('../data/favoriteTestData.json');
const Constants = require('../utils/constants.js')

chai.use(require('chai-json-schema'));

describe('Test API Favorite', () => {
    it('API Post Favorite', (done) => {
        request(`${Constants.localhost}${Constants.favorites}`)
        .post(favoriteData)
        .set('Content-Type','application/json')
        .end((err, res) => {
            expect(res.body).to.be.jsonSchema(schemaFavorite);
            expect(res.statusCode).to.be.equals(200);
            done();
        });
    });
    
    favoriteDataError.forEach((item) => {
        let favorite = {
            nombre_banda: item.nombre_banda,
            cancion_id: item.cancion_id,
            usuario: item.usuario,
            ranking: item.ranking
        }
        it('API Post Favorite', (done) => {
            request(`${Constants.localhost}${Constants.favorites}`)
            .post(favorite)
            .set('Content-Type','application/json')
            .end((err, res) => {
                expect(res.body.status).to.be.equal('FAILED');
                expect(res.statusCode).to.be.equals(400);
                done();
            });
        });
    });
});