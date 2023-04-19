var express = require('express');
const cakes_controlers= require('../controllers/cakes');
var router = express.Router();
/* GET cakes */
router.get('/', cakes_controlers.cakes_view_all_Page );
router.get('/detail', cakes_controlers.cakes_view_one_Page);
module.exports = router;

/* GET create cakes page */
router.get('/create', cakes_controlers.cakes_create_Page);

/* GET create update page */
router.get('/update', cakes_controlers.cakes_update_Page);

/* GET delete costume page */
router.get('/delete', cakes_controlers.cakes_delete_Page);