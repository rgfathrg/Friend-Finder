var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

var friends = [
    {
        name: "Meghan",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzcVOO6wtJO-2oPXXWfA_T6JIwxTgl8yNzPan4_mfMIqflD-itww",
        scores: [
            1,
            4,
            3,
            3,
            5,
            2,
            4,
            5,
            2,
            4
        ]
    },
    {
        name: "Surko",
        photo: "asdfg",
        scores: [
            2,
            4,
            5,
            3,
            2,
            3,
            1,
            2,
            3,
            1
        ]
    }
]

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/home.html"));
});

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
});

app.get("/api/friends", function(req, res) {
    return res.json(friends);
});

app.post("/api/friends", function(req, res) {
    var newFriend = req.body;
    friends.push(newFriend);
    res.json(newFriend);
});

app.listen(PORT, function() {
    console.log("App listening on PORT" + PORT);
});