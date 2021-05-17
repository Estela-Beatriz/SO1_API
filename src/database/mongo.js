const mongoose = require('mongoose');

const MONGO_URL = process.env.MONGO_URL;
const MONGO_CONFIG = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose.connect(MONGO_URL, MONGO_CONFIG)
    .then((db) => {
        console.log("DB is connected to: ", db.connection.host);
    })
    .catch((error) => {
        console.log("error:", error);
        process.exit(1);
    });

