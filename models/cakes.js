const mongoose = require("mongoose")
const cakesSchema = mongoose.Schema({
cake_Name: String,
cake_flavour: String,
cost: {type:Number,min:4,max:400}
})
module.exports = mongoose.model("cakes", cakesSchema)
