const {spawn} = require('child_process');


const recognition = () => {
    const python = spawn('python3', ['main.py']);

    python.stdout.on('data', (data) => {
        console.log(data);
    });

    python.stderr.on('data', (data) => {
        console.log(String(data));
    });
}

recognition();