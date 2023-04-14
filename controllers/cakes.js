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
// for a specific Costume.
exports.cakes_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await cakes.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
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

exports.cakes_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await cakes.findById( req.params.id)
// Do updates of properties
if(req.body.cake_flavour)
toUpdate.cake_flavour = req.body.cake_flavour;
if(req.body.cost) toUpdate.cost = req.body.cost;
if(req.body.cake_Name) toUpdate.cake_Name = req.body.cake_Name;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
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