const fs = require('fs');
const convertImg = require('./convertImg');

const processImg = async () => {
    try {
        fs.unlink('document.png', err => {
            if (err) {
                return {
                    status_code: 500,
                    data: err,
                }
            }
        })

        const base64Face = await convertImg();

        if (base64Face.status_code != 200) {
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
            data: base64Face.data,
        }
    } catch (err) {
        return {
            status_code: 500,
            data: err
        }
    }
}

module.exports = processImg;