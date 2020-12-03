const fsPromises = require('fs').promises;

fsPromises.writeFile('./readFile.txt', 'Hello Again!', 'utf-8')
    .then(res => {
        return console.log('Done!')
    });