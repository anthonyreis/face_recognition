const express = require('express');
const bodyParser = require('body-parser');
const dataRecognition = require('./public/dataRecognition');

const app = express();
const port = process.env.PORT || 8081;

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json({limit: '10mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}));

app.post('/faceRecognition', async (req, res) => {
    const response = await dataRecognition(req.body['img']);

    res.status(response.status_code).send({
        status_code: response.status_code,
        data: response.data,
    })
})

app.get('/*', (req, res) => {
    res.send('404 - Page Not Found');
})

app.listen(port, () => {
    console.log('Server is up on port ' + port);
})
