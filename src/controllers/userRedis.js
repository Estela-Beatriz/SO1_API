const client = require('../database/redis')

module.exports = {

    async save(req, res) {
      let status = client.rpush('users',JSON.stringify([req.body]));
      res.send(status)
    },
    async get(req, res) {
      client.lrange('users',0,-1, async (err, Users) => {
        if (Users) {
          var users= JSON.parse(`[${Users.toString()}]`)
          res.send(users)
        } else {
          // return the result to the client
          res.send({status:'Sin datos'})
        }
      });
    },
    async clear(req, res) {
      client.DEL('users',async (err, Users) => {
        if (Users) {
          res.send(Users)
        } else {
          // return the result to the client
          res.send({status:'Sin datos'})
        }
      });
    },

};