module.exports = {
    buttons: function (req, res) {
        res.render('index', {title: 'Express'});
    },
    createButton: function (req, res) {
        res.render('create_button', {title: 'Create Button'});
    }
};