const express = require('express');
const env = require('dotenv').config();
const cors  = require('cors');
const morgan = require('morgan');
const app = new express();
const PORT = process.env.PORT || 3000 ;
const mongodb = require('./src/database/mongo');

app.use(express.json({ extended: true }))
app.use(morgan('dev'));
app.use(cors())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});



const userMongoRoutes = require('./src/routes/userMongo.routes');
const userRedisRoutes = require('./src/routes/userRedis.routes');

app.use('/mongo',userMongoRoutes);
app.use('/redis',userRedisRoutes);

app.listen(PORT);
console.log(`Server on port ${PORT}`)