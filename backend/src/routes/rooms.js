const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Room endpoint')
});

module.exports = router;