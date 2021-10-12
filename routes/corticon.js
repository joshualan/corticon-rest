const express = require('express')
const router = express.Router()

const corticonService = require('../services/corticon.service')

router.get('/', corticonService.getCorticon);
router.post('/', corticonService.postCorticon);
module.exports = router