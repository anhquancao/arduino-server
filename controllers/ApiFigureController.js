var Figure = require('../model/Figure');

module.exports = {
    addFigure: function (req, res) {
        var figure = new Figure();
        figure.temp = req.body.temp;
        figure.humid = req.body.humid;
        figure.save(function (err, figure) {
            if (err) console.log(err);
            return res.json({message: "Thêm thông số thành công"});
        });
    },
    figures: function (req, res) {
        var currentTemp = Figure.find({}).sort({createdAt: -1})
            .limit(1).select({temp: 1, humid: 1});
        var avgTempByDay = Figure.aggregate({
            $group: {
                _id: {$dayOfYear: "$createdAt"},
                avgTemp: {$avg: "$temp"}
            }
        }).sort({_id: -1}).limit(1);
        var fromDate = new Date();
        fromDate.setDate(fromDate.getDate() - 7);
        var avgTempBy7Days = Figure.aggregate(
            [
                {$match: {createdAt: {$gte: fromDate, $lt: new Date()}}},
                {
                    $group: {
                        _id: null,
                        avgTemp: {$avg: "$temp"}
                    }
                }
            ]);

        var from30Date = new Date();
        from30Date.setDate(from30Date.getDate() - 30);
        var avgTempBy30Days = Figure.aggregate(
            [
                {$match: {createdAt: {$gte: from30Date, $lt: new Date()}}},
                {
                    $group: {
                        _id: null,
                        avgTemp: {$avg: "$temp"}
                    }
                }
            ]);

        Promise.all([currentTemp, avgTempByDay, avgTempBy7Days, avgTempBy30Days])
            .then(function (values) {
                // console.log(values);
                var curTemp = values[0][0].temp;
                var avgTemp = values[1][0].avgTemp;
                var _avgTempBy7Days = values[2][0].avgTemp;
                var _avgTempBy30Days = values[3][0].avgTemp;
                // console.log(_avgTempBy7Days);

                res.json({
                    curTemp: curTemp,
                    avgTemp: avgTemp,
                    avgTempBy7Days: _avgTempBy7Days,
                    avgTempBy30Days: _avgTempBy30Days
                });
            }).catch(function (reason) {
            console.log(reason);
        });
    }
};