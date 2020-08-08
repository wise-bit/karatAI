
const request = require('request');
let url = "https://run.mocky.io/v3/c60bf626-ad94-45ca-9643-d57400e60489";
let options = { json: true };


module.exports.displayIndex = function (req, res, next) {

    res.render("index", { title: "Welcome Matthew" });
};


module.exports.displayCanvas = function (req, res, next) {


    request(url, options, (error, l, person) => {
        if (error) {
            return console.log(error)
        };

        if (!error && l.statusCode == 200) {


            console.log(person[0]["timestamp"]);
            console.log(person[0]["coordinates"]);
            console.log(person[0]["angles"]);
            res.render("index", { title: "canvas", data: JSON.stringify(person) });


        };
    });

};





