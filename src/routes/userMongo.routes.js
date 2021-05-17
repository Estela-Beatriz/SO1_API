const { Router } = require('express');
const controller = require('../controllers/userMongo')
const controllerRedis = require('../controllers/userRedis')
const router = Router();

router.get('/getUsers', async (req, res) => {
    controller.getUsers(req, res)
});

router.post('/save', async (req, res) => {
    controller.save(req, res)
});

router.get('/getGenderByCountry', async (req, res) => {
    controller.getGendersByCountry(req, res)
});

router.get('/getUserByCountry', async (req, res) => {
    controller.getUserByCountry(req, res)
});

router.get('/getCountry', async (req, res) => {
    controller.getCountry(req, res)
});

router.get('/clear', async (req, res) => {
    controller.clearCollection(req, res)
});

module.exports = router;