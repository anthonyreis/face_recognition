const express = require('express');
const bodyParser = require('body-parser');
const dataRecognition = require('./public/dataRecognition');

const app = express();
const port = process.env.PORT || 8081;

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json({ limit: '10mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

app.post('/faceRecognition', async (req, res) => {
    try {
        const response = await dataRecognition(req.body['img']);

        res.status(response.status_code).send({
            data: response.data,
        })
    } catch (err) {
        console.log(err)
        res.status(500).send({
            'err': 'Houve um problema ao processar a imagem.'
        })
    }

})

app.get('/*', (req, res) => {
    res.send('404 - Page Not Found');
})

app.listen(port, () => {
    console.log('Server is up on port ' + port);
})
