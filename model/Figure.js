var mongoose = require('mongoose');
var figureSchema = new mongoose.Schema({
    temp: {
        type: Number,
        required: true
    },
    humid: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});
module.exports = mongoose.model('Figure', figureSchema);