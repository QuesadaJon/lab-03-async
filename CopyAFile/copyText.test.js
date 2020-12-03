const { copyText } = require('./copyText')
const fsPromises = require('fs').promises;

describe('copy', () => {
    it(' should read a file and then copy the contents into a specified file', () => {
        return copyText(`${__dirname}/sample.txt`, './newFile.txt')
            .then(() => {
                return fsPromises.readFile('./newFile.txt', 'utf-8')
            })
            .then(res => {
                expect(res).toEqual('Hello World!')
            })
    })
})

// afterEach(() => {
//     return false.rm('./newFile.txt')

// })