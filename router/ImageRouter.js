const express = require('express');
const ImageRouter = express.Router();
const ListImagesModel = require('../models/ListImages');

ImageRouter.get('/allImage', async (req, res) =>{
    try {
        const images = await ListImagesModel.find({})
            .populate('ProfileUser', 'nameDisplay')
        res.json({ success: 1, images });
    } catch (error){
        res.status(500).json({ success: 0, error: error })
    }
})

ImageRouter.post('/addImage', (req, res) => {
    console.log("UP anh");
    const { user, urlImage, title, description, hashtagImage } = req.body;
    
    ListImagesModel.create({ user, urlImage, title, description, hashtagImage }, (err, newimageAdded) => {
        if (err) res.status(500).send({ success: 0, err: err })
        else res.status(201).send({ success: 1, newimageAdded })
    })
})






module.exports = ImageRouter;