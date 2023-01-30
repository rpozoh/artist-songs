const request = require('supertest');
const expect = require('chai').expect;
const chai = require('chai');
const schemaSong = require('../schemas/get-artist-songs-schema.json');
const Constants = require('../utils/constants.js')

chai.use(require('chai-json-schema'));

describe('test API tracks', () => {
    it('API Get Tracks', (done) => {
        request(`${Constants.localhost}${Constants.getTracks}`)
        .get('?name=Radiohead')
        .end((err, res) => {
            expect(res.body).to.be.jsonSchema(schemaSong);
            expect(res.statusCode).to.be.equals(200);
            done();
        });
    });
    
    it('API Get Tracks without name', (done) => {
        request(`${Constants.localhost}${Constants.getTracks}`)
        .get('?name=')
        .end((err, res) => {
            expect(res.statusCode).to.be.equals(400);
            expect(res.body.status).to.be.equal('FAILED');
            expect(res.body.data.error).to.be.equal('El nombre del artista es requerido');
            done();
        });
    });
});