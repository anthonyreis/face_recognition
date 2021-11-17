const fs = require('fs');
const { spawn } = require('child_process');
const processImg = require('./processImg');
const createImg = require('./createImg');

const dataRecognition = async (img) => {
    try {
        await createImg(img);

        const child = spawn('python', ['public/cropFace.py']);

        let error = '';

        for await (const chunk of child.stderr) {
            error += chunk;
        }

        const exitCode = await new Promise((resolve, reject) => {
            child.on('close', resolve);
        });

        if (exitCode) {
            return {
                status_code: 500,
                data: 'Houve um erro ao identificar a face.'
            }
        }

        return await processImg();
    } catch (err) {
        return {
            status_code: 500,
            data: 'Houve um problema ao processar a sua requisição',
        }
    }
}

module.exports = dataRecognition;
