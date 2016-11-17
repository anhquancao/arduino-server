Button = require('../model/Button');

module.exports = {
    changeState: function (req, res) {
        var port = req.body.port;
        var state = req.body.state;
        Button.findOne({port: port}, function (err, button) {
            if (err) throw err;
            button.state = state;
            button.save(function (err, button) {
                if (err) throw err;
                console.log(button);
            });
        });
        res.json({message: "success"});
    },
    createButton: function (req, res) {
        var button = new Button();
        button.name = req.body.name;
        button.port = req.body.port;
        button.state = req.body.state;
        button.save(function (err, button) {
            if (err) throw err;
            return res.json({message: "Tạo thiết bị thành công"});
        });
    },
    buttons: function (req, res) {
        Button.find({}, {state: 1, port: 1, name: 1, _id: 0}).exec(function (err, buttons) {
            if (err) throw err;
            res.json({buttons: buttons})
        });
    }
};