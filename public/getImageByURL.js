const axios = require('axios');

const getImage = async (url) => {
    try {
        const {data} = await axios.get(url, {responseType: 'arraybuffer'});
        const b64_img = data.toString('base64');

        return b64_img;
    } catch(err) {
        return {
            status_code: 500,
            data: 'Houve um erro ao recuperar a imagem da url'
        }
    }
    
}

module.exports = {
    getImage
};