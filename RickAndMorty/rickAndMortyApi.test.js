const { getCharacter } = require('./rickAndMortyApi')
const fsPromises = require('fs').promises;

describe('getCharacter', () => {
    it('should fetch a character from rick and morty api', async () => {
        const res = await getCharacter(183)
        expect(res).toEqual({
            "name": "Johnny Depp",
            "status": "Alive",
            "species": "Human"
        })
    })
})