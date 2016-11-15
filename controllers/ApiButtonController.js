Button = require('../model/Button');

module.exports = {
    buttons: function (req, res) {
        Button.find().exec(function (err, buttons) {
            if (err) throw err;
            res.json({buttons: buttons})
        });
    }
};