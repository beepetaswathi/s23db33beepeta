const mongoose = require("mongoose");

const cakesSchema = mongoose.Schema({
  cake_Name: { 
    type: String,
    required: true,
    unique: true,
    minLength: [4,"cake Name is not valid "],
    },
  cake_flavour: {
    type: String,
    required: true,
    unique: true,
    minLength: [6,"cake flavour is not valid "],
    },
  cost: {
    type: Number,
    required: true,
    unique: true,
    minLength: [7,"cost is not valid "],
    },
    
});

module.exports = mongoose.model("cakes", cakesSchema);