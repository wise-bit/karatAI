
const request = require('request');
let url = "https://run.mocky.io/v3/42bc1bcf-11df-42d5-9473-23a06c023d3b";
let options = { json: true };


module.exports.displayFirstPage = function (req, res, next) {

    res.render("index", { title: "firstPage" });
};

module.exports.displayLogin = function (req, res, next) {

    res.render("index", { title: "login" });
};


module.exports.displayIndex = function (req, res, next) {

    res.render("index", { title: "home" });
};


module.exports.displayCamera = function (req, res, next) {

    res.render("index", { title: "camera" });
};
module.exports.displayPlay = function (req, res, next) {

    res.render("index", { title: "play" });
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





