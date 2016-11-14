module.exports = {
    buttons: function (req, res, next) {
        res.render('index', {title: 'Express'});
    }
};