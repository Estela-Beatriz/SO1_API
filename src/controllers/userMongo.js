const User = require('../models/user.model.mongo');

module.exports = {

    async save(req, res) {
        const user = new User(req.body);
        await user.save();
        //res.send( { status: 1, msg: 'save' });
    },

    // recupera todos los datos de la base 
    async getUsers(req, res){
        const users = await User.find({}).catch((e)=>e);
        res.send(users);
       
    },
    
    // géneros de los vacunados por país
    async getGendersByCountry(req, res){
        const pais = req.query.pais
        const users = await User.aggregate([
            { 
                $match: { location: pais } 
            },
            {   
                $group: {
                    _id: "$gender",
                    count:{ $sum:1}
                }
            }/*,
            {
                $project: {
                    _id: 1,
                    count: 1,
                    perc: { $divide: [{ $multiply: [100, "$count"] }, all] }
                }
            }*/
        ]).catch((e)=>e)
        res.send(users);   
    },

    //últimos cinco vacunados almacenados por país
    async getUserByCountry(req, res){
        const pais = req.query.pais
        const users = await User.find({ location: pais }).sort({ $natural: -1 }).limit(5).catch((e)=>e)
        res.send(users);   
    },

    async getCountry(req, res){
        const users = await User.aggregate([
            {   
                $group: {
                    _id: "$location"
                }
            }
        ]).catch((e)=>e)
        res.send(users);   
    },
    //limpia la base
    async clearCollection(req, res){
        const status = await User.remove({});
        res.send({ status : status.ok });
    }
};