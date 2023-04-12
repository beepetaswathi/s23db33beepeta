var cakes = require('../models/cakes');
// List of all cakes
exports.cakes_list = async function(req, res) {
    try{
    thecakes = await cakes.find();
    res.send(thecakes);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    
// for a specific cakes.
exports.cakes_detail = function(req, res) {
res.send('NOT IMPLEMENTED: cakes detail: ' + req.params.id);
};
// Handle cakes create on POST.
exports.cakes_create_post = async function(req, res) {
    console.log(req.body)
    let document = new cakes();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"cake_Name":"strawberrycake", "cost":25, "cake_flavour":"strawberry"}
    document.cake_Name = req.body.cake_Name;
    document.cake_flavour = req.body.cake_flavour;
    document.cost = req.body.cost;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    
// Handle cakes delete form on DELETE.
exports.cakes_delete = function(req, res) {
res.send('NOT IMPLEMENTED: cakes delete DELETE ' + req.params.id);
};
// Handle cakes update form on PUT.
exports.cakes_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: cakes update PUT' + req.params.id);
};
// VIEWS
// Handle a show all view
exports.cakes_view_all_Page = async function(req, res) {
    try{
    thecakes = await cakes.find();
    res.render('cakes', { title: 'cakes Search Results', results: thecakes });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };