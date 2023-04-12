var express = require('express');
const cakes_controlers= require('../controllers/cakes');
var router = express.Router();
/* GET cakes */
router.get('/', cakes_controlers.cakes_view_all_Page );
module.exports = router;

