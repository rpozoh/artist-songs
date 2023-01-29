const apicache = require('apicache');
const redis = require('redis');

const cache = apicache.options({
    defaultDuration: '6 minutes'
}).middleware

const redisClient = redis.createClient({
    host: 'redis-server',
    port: 6379
})

module.exports = { cache, redisClient };