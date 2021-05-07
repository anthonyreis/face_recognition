const {spawn} = require('child_process');
const {decode} = require('node-base64-image');

const dataRecognition = async (img) => {
    try {
        newImg = img.replace('data:image/png;base64,', '')
        await decode(newImg, { fname: 'document', ext: 'png' });

        const python = spawn('python3', ['public/cropFace.py'])

        python.stdout.on('data', (data) => {
           return 'Success'
        });

        python.stderr.on('data', (data) => {
            return 'Fail'
        });
    } catch(err) {
        console.log(err)
    }
    
}

module.exports = dataRecognition;