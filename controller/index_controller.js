
const request = require('request');
let url = "https://run.mocky.io/v3/6aebabe6-b153-4708-a05b-a0779ff43a3e";
let options = { json: true };


module.exports.displayIndex = function (req, res, next) {

    res.render("index", { title: "home" });
};

module.exports.displayCamera = function (req, res, next) {

    res.render("index", { title: "camera" });
};
module.exports.displayLoading = function (req, res, next) {

    res.render("index", { title: "loading" });
};
module.exports.displayReady = function (req, res, next) {

    res.render("index", { title: "ready" });
};
module.exports.displayScore = function (req, res, next) {

    res.render("index", { title: "score" });
};


module.exports.displayCanvas = function (req, res, next) {

    request(url, options, (error, l, person) => {
        if (error) {
            return console.log(error)
        };

        if (!error && l.statusCode == 200) {

            // console.log(person[1]["coordinates"]);

            res.render("index", { title: "canvas", data: JSON.stringify(person) });


        };
    });

};





