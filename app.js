const express = require('express')
const bodyParser = require('body-parser')
const dataRecognition = require('./public/dataRecognition')
const convertImg = require('./public/convertImg')

const app = express()
const port = process.env.PORT || 8081

app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json({limit: '50mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}))

app.post('/faceRecognition', async (req, res) => {
    await dataRecognition(req.body['img'])
    base64_img = await convertImg()
    
    res.send(base64_img)
})

app.get('/*', (req, res) => {
    res.send('404 - Page Not Found')
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})