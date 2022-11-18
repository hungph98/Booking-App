const express = require('express');

const router = express.Router();

router.post('/', (req, res) => {
    res.send('User endpoint')
});

module.exports = router;