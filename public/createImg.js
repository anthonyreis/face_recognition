const { decode } = require('node-base64-image');
const { getImage } = require('./getImageByURL');

const createImg = async (img) => {
    const newImg = img.includes('http')
        ? await getImage(img)
        : img.replace('data:image/png;base64,', '')

    await decode(newImg, { fname: 'document', ext: 'png' })
}

module.exports = createImg;