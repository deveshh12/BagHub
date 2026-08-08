const express = require('express');
const router = express.Router();
const Owner = require('../models/owners-model.js');
if(process.env.NODE_ENV === "development") {
    router.post('/create', async (req, res) => {
        let owners = await Owner.find();
        if(owners.length > 0) {
            return res.status(503).send('Owners already exist');
        }
        else{
            let { fullname, email, password } = req.body;
            const owner = new Owner({
                fullname,
                email,
                password
            });
            await owner.save();
            res.status(201).send('Owner created successfully');
        }
    });
}

router.get('/', (req, res) => {
    res.send('Owners route');
});




module.exports = router;