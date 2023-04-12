const mongoose = require("mongoose")
const cakesSchema = mongoose.Schema({
cake_Name: String,
cake_flavour: String,
cost: Number
})
module.exports = mongoose.model("cakes", cakesSchema)