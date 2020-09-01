const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');
//Link con tren link cha

router.get('/:slug', siteController.search);

router.get('/', siteController.index);

module.exports = router;
