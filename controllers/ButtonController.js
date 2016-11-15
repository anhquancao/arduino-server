Button = require('../model/Button');

module.exports = {
    buttons: function (req, res) {
        Button.find().exec(function (err, buttons) {
            if (err) throw err;
            res.render('index', {title: 'Danh sách đèn', buttons: buttons});
        });

    },
    deleteButton: function (req, res) {
        var id = req.query.id;
        Button.findById(id).remove().exec();
        res.redirect('/');
    },
    createButton: function (req, res) {
        res.render('create_button', {title: 'Tạo đèn mới'});
    },
    changeState: function (req, res) {
        var id = req.body.id;
        var state = req.body.state;
        Button.findById(id, function (err, button) {
            if (err) throw err;
            button.state = state;
            button.save(function (err, button) {
                if (err) throw err;
                console.log(button);
            });
        });
        res.json({message: "success"});
    },
    storeButton: function (req, res) {
        var state = req.body.state;
        var name = req.body.name;
        var port = req.body.port;

        var button = new Button();
        button.name = name;
        button.port = port;
        button.state = state;
        button.save(function (err, button) {
            if (err) throw err;
            console.log(button);
        });
        res.redirect('/');
    }
};