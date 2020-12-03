const fsPromises = require('fs').promises;

fsPromises.readFile('./readFile.txt', 'utf-8')
    .then(res => {
        return console.log(res)
    });