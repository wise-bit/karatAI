module.exports.displayIndex = function (req, res, next) {
    res.render("index", { title: "Welcome Matthew" });
};