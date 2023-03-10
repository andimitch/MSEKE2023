const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const conceptSchema = new Schema({
    uniqueID: {
        type: String, 
        required: true
    },
    name: {
        type: String,
        required: true
    },
    parent: {
        type: String,
        default: null,
    },
    description: {
        type: String,
        default: "",
    },
    colour: {
        type: String,
        default: "black",
    },
    shape: {
        type: String,
        default: "box",
    },
    courses: {
        type: String,
        default: [],
    },    
    related: {
        type: String,
        default: [],
    },
})


module.exports = mongoose.model("Concept", conceptSchema);

