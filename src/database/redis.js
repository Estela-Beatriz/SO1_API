const redis = require('redis');
const HOST = process.env.HOST;
const PORT = process.env.PORTREDIS;
const PASS = process.env.PASSREDIS;
const redisConfig = {
    host: HOST,
    port: PORT,
    pass: PASS
}

const client = redis.createClient(redisConfig)
client.on('error',function (error) {
    console.error(error);
});

client.auth(PASS);

client.on('connect',function (error) {
    console.log('Connect');
});

module.exports = client;