const fsPromises = require('fs').promises;

function copyText(src, dst) {
    return fsPromises.readFile(src, 'utf-8')
        .then(res => {
            return fsPromises.writeFile(dst, res, 'utf-8')
        })
}

module.exports = {
    copyText
}