const { Router } = require('express');
const client = require('../database/redis')
const controller = require('../controllers/userRedis')
const router = Router();

router.get('/get', async (req,res) =>{
   controller.get(req,res)
});

router.post('/save', async (req,res) =>{
   controller.save(req,res)
});

router.get('/clear', async (req, res) => {
   controller.clear(req, res)
});

 module.exports = router;