const express = require('express');
const ImageRouter = express.Router();
const ListImagesModel = require('../models/ListImages');

ImageRouter.get('/allImage',(req, res) =>{
    ListImagesModel.find()
    .populate('ProfileUser')
    .then (docs => {
        res.status(500).send({ success: 1, quang: docs});
    })
} )

ImageRouter.post('/addImage', (req, res) => {
    console.log("UP anh");
    const { username, urlImage, hashtagImage } = req.body;
    
    ListImagesModel.create({ username, urlImage, hashtagImage }, (err, newimageAdded) => {
        if (err) res.status(500).send({ success: 0, err: err })
        else res.status(201).send({ success: 1, newimageAdded })
    })
})






module.exports = ImageRouter;