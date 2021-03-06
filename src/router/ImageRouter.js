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

ImageRouter.get('/:IDImage', async(req, res) => {
    const idImage = req.params.IDImage;
    try {
        const imageFound = await ListImagesModel.findById(idImage)
        if (!imageFound) {
            res.status(404).json({ success: 0, message: "Not found!" })
        } else {
            res.json({ success: 1, imageFound })
        }
    } catch (error) {
        res.status(500).json({ success: 0, message: error })
    }
})

ImageRouter.post('/addImage', (req, res) => {
    console.log("UP anh");
    const { user, id, urlImage, title, description, hashtagImage } = req.body;
    
    ListImagesModel.create({ user, id, urlImage, title, description, hashtagImage }, (err, newimageAdded) => {
        if (err) res.status(500).send({ success: 0, err: err })
        else res.status(201).send({ success: 1, newimageAdded })
    })
})

ImageRouter.delete('/:IDImage', (req, res) => {
    let idImage = req.params.IDImage;
    ListImagesModel.findOneAndRemove(idImage, (err) => {
        if (err) res.json({ success: 0, message: "Không thể xóa được ảnh" });
        else res.json({ success: 1, message: "Đã xóa ảnh" })
        if (!idImage) res.status(404).send({ succes: 0, mess: "image deleted" })
    })
})










module.exports = ImageRouter;