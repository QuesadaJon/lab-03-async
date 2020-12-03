const { transform } = require('./transform')
const fsPromises = require('fs').promises;

describe('transform', () => {
    beforeAll(() => {
        return Promise.all([
            fsPromises.writeFile('./transform/transform.txt', 'Hello')
        ]);
    });
    it('should make all letters capitalized and reverse the order of the string', () => {
        return transform(`${__dirname}/transform.txt`)
            .then(() => {
                return fsPromises.readFile(`${__dirname}/transform.txt`, 'utf-8')
            })
            .then(res => {
                expect(res).toEqual('OLLE')
            })
    })
})