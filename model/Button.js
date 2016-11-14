var mongoose = require('mongoose');
var ButtonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    port: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});
module.exports = mongoose.model('Button', ButtonSchema);