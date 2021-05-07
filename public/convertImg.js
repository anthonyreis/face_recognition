const { readFile } = require('fs/promises');

const convertImg = async () => {
    try {
        image = await readFile('resultImage.png');
        b64_img = image.toString('base64')

        return b64_img
    } catch (err) {
        console.error(err);
    }
}

module.exports = convertImg;
