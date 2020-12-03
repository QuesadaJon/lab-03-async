const fsPromises = require('fs').promises;

reverseString = (str) => {
    return str.split("").reverse().join("").toUpperCase()
}
removeCaps = (str) => {
    return str.replace(/[^a-z]/g, '');
}

transform = (src) => {
    return fsPromises.readFile(src, 'utf-8')
        .then(res => {
            return removeCaps(res);
        })
        .then(res => {
            return reverseString(res)
        })
        .then(res => {
            return fsPromises.writeFile(src, res, "utf-8")
        })
}

module.exports = {
    transform
}