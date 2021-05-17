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


const userMongoRoutes = require('./src/routes/userMongo.routes');
const userRedisRoutes = require('./src/routes/userRedis.routes');

app.use('/mongo',userMongoRoutes);
app.use('/redis',userRedisRoutes);

app.listen(PORT);
console.log(`Server on port ${PORT}`)