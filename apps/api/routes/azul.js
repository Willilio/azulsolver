const express = require('express');
const router = express.Router();

router.get('/ok', (req, res) => {
    res.send('ok yes');
})

module.exports = router;