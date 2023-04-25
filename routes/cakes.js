var express = require('express');
const cakes_controlers= require('../controllers/cakes');
var router = express.Router();


//A little function to check if we have an authorized user and continue on
//or
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
req.session.returnTo = req.originalUrl;
res.redirect("/login");
}

/* GET cakes */
router.get('/', cakes_controlers.cakes_view_all_Page );
router.get('/detail',secured, cakes_controlers.cakes_view_one_Page);
module.exports = router;

/* GET create cakes page */
router.get('/create',secured, cakes_controlers.cakes_create_Page);

/* GET update cakes page */
router.get('/update', secured,cakes_controlers.cakes_update_Page);


/* GET delete cakes page */
router.get('/delete',secured,cakes_controlers.cakes_delete_Page);

