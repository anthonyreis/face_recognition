const {spawnSync} = require('child_process');
const {decode} = require('node-base64-image');
const convertImg = require('./convertImg');
const fs = require('fs');

async function dataRecognition(img) {
    const newImg = img.replace('data:image/png;base64,', '');
    await decode(newImg, { fname: 'document', ext: 'png' });

    const child = spawnSync('python3', ['public/cropFace.py']);

    fs.unlink('document.png', err => {
        if (err) {
            return {
                status_code: 500,
                data: err,
            }
        }
    })

    const base64Face = await convertImg();
    
    if(base64Face.status_code != 200) {
        return base64Face;
    }

    fs.unlink('resultImage.png', err => {
        if (err) {
            return {
                status_code: 500,
                data: err,
            }
        }
    })

    return {
        status_code: 200,
        data: base64Face,
    }
    
}

module.exports = dataRecognition;