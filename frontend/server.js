const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const server = express();

app.prepare()
    .then(() => {

        // Slug on url
        server.get('/image/:imageId', (req, res) => {
            console.log(req.params.imageId);
            return app.render(req, res, '/image', { imageId: req.params.imageId })
        });

        server.get('*', (req, res) => {
            return handle(req, res);
        });

        server.listen(process.env.PORT || 3000, err => {
            if (err) console.log(err)
            console.log('> Ready on port 3000');
        })
    })
    .catch(err => {
        console.log(err);
        process.exit();
    });