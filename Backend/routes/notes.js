const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    obj = {
        name: "Amrit"
    };
    res.json(obj);
})

module.exports = router;