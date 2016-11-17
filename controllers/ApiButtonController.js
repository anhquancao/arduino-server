Button = require('../model/Button');

module.exports = {
    buttons: function (req, res) {
        Button.find({}, {state: 1, port: 1, name: 1, _id: 0}).exec(function (err, buttons) {
            if (err) throw err;
            res.json({buttons: buttons})
        });
    }
};