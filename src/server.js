var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
const bodyParse = require('body-parser');
const mongoose = require('mongoose');
const apiRouter = require('./router/ApiRouter');
const session = require('express-session');
const cors = require('cors');
app.use(bodyParse.urlencoded({ extended: false }));
app.use(bodyParse.json());


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header('Access-Control-Allow-Credentials', 'true')
    res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS");
    next();
});
// app.use(cors({ origin: [ 'https://battlenow.herokuapp.com' ], credentials: true }));
app.use(cors({ origin: [ 'http://localhost:3000' ], credentials: true }));

app.use( session({
    secret:"nothing in here",
    resave: false, 
    saveUninitialized: false,
    // rolling: true,
    // save cookie in 1 week
    cookie:{secure:false, maxAge:1000*60*60*24*7}

}))


app.use("/api", apiRouter);


// mongoose.connect("mongodb://musicbattleperfect:musicbattleperfect98@ds161092.mlab.com:61092/musicbattleperfect", { useNewUrlParser: true }, function (err) {
mongoose.connect("mongodb://localhost/project1", { useNewUrlParser: true }, function (err) {

    if (err) console.log(err);
    else console.log("DB ready");
})


http.listen(process.env.PORT || 1998, function () {
    console.log('listening on *:1998');
});
