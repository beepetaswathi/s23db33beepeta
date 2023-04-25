var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var cakes_controller = require('../controllers/cakes');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// cakes ROUTES ///
// POST request for creating a cakes.
router.post('/cakes', cakes_controller.cakes_create_post);
// DELETE request to delete cakes.
router.delete('/cakes/:id', cakes_controller.cakes_delete);
// PUT request to update cakes.
router.put('/cakes/:id', cakes_controller.cakes_update_put);
// GET request for one Cakes.
router.get('/cakes/:id', cakes_controller.cakes_detail);
// GET request for list of all Cakes items.
router.get('/cakes', cakes_controller.cakes_list);
module.exports = router;
