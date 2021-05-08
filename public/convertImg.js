const { readFile } = require('fs/promises');

const convertImg = async () => {
    try {
        const image = await readFile('resultImage.png');
        const b64_img = image.toString('base64');
       
        return {
            status_code: 200,
            data: b64_img,
        }
    } catch (err) {
        return {
            status_code: 500,
            data: err
        }
    }
}

module.exports = convertImg;
