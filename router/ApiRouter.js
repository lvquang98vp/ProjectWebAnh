const express = require('express');
const apiRouter = express.Router();
const musicRouter = require("./MusicRouter");
const UserRouter = require("./UserRouter");
const AuthRouter = require("./apiAuth");
const ImageRouter = require("./ImageRouter");
apiRouter.use("/", (req, res, next) => {
    // console.log("Middleware");
    // console.log(req.session);
    // console.log(req.sessionID);

    next();
});

apiRouter.get("/", (req, res) => {
    res.send("Hello World");
});

apiRouter.use("/music",musicRouter);
apiRouter.use("/user",UserRouter);
apiRouter.use("/auth",AuthRouter);
apiRouter.use("/image",ImageRouter);
module.exports = apiRouter;