
var index = function (app) {
    app.get("/", function (req, res) {
        res.render("index")
    })
};

var allies = function (app) {
    app.get("/allies", function (req, res) {
        res.render("allies")
    })
};

var createAccount = function (app) {
    app.get("/new-user", function (req, res) {
        res.render("new")
    })
};

var login = function (app) {
    app.get("/login", function (req, res) {
        res.render("login")
    })
};

//this one will need to display the call buttons for the user to select 
var sendHelp = function (app) {
    app.get("/call", function (req, res) {
        res.render("call")
    })
};



module.exports = {
    index: index,
    allies: allies,
    createAccount: createAccount,
    login: login,
    sendHelp: sendHelp
};