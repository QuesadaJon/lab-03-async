const { getCharacter, getManyCharacters } = require('./rickAndMortyApi')
const fsPromises = require('fs').promises;
const fetch = require('node-fetch');

jest.mock('node-fetch')

describe('getCharacter', () => {
    it('should fetch a character from rick and morty api', async () => {
        fetch.mockResolvedValue({
            json: () => Promise.resolve({
                "id": 183,
                "name": "Johnny Depp",
                "status": "Alive",
                "species": "Human",
                "type": "",
                "gender": "Male",
                "origin": {
                    "name": "Earth (C-500A)",
                    "url": "https://rickandmortyapi.com/api/location/23"
                }
            })
        })
        const res = await getCharacter(183)
        expect(res).toEqual({
            "name": "Johnny Depp",
            "status": "Alive",
            "species": "Human"
        })
    })
})

describe('getManyCharacters', () => {
    it('should fetch many characters from rick and morty api', async () => {
        fetch.mockResolvedValue({
            json: () => Promise.resolve(
                {
                    "id": 1,
                    "name": "Rick Sanchez",
                    "status": "Alive",
                    "species": "Human",
                    "type": "",
                    "gender": "Male",
                    "origin": {
                        "name": "Earth (C-137)",
                        "url": "https://rickandmortyapi.com/api/location/1"
                    }
                }
            )
        })
        fetch.mockResolvedValue({
            json: () => Promise.resolve(
                {
                    "id": 2,
                    "name": "Morty Smith",
                    "status": "Alive",
                    "species": "Human",
                    "type": "",
                    "gender": "Male",
                    "origin": {
                        "name": "Earth (C-137)",
                        "url": "https://rickandmortyapi.com/api/location/1"
                    }
                }
            )
        })
        fetch.mockResolvedValue({
            json: () => Promise.resolve(
                {
                    "id": 3,
                    "name": "Summer Smith",
                    "status": "Alive",
                    "species": "Human",
                    "type": "",
                    "gender": "Female",
                    "origin": {
                        "name": "Earth (C-137)",
                        "url": "https://rickandmortyapi.com/api/location/1"
                    }
                }
            )
        })
        fetch.mockResolvedValue({
            json: () => Promise.resolve(
                {
                    "id": 5,
                    "name": "Jerry Smith",
                    "status": "Alive",
                    "species": "Human",
                    "type": "",
                    "gender": "Male",
                    "origin": {
                        "name": "Earth (C-137)",
                        "url": "https://rickandmortyapi.com/api/location/1"
                    }
                }
            )
        })
        fetch.mockResolvedValue({
            json: () => Promise.resolve(
                {
                    "id": 4,
                    "name": "Beth Smith",
                    "status": "Alive",
                    "species": "Human",
                    "type": "",
                    "gender": "Female",
                    "origin": {
                        "name": "Earth (C-137)",
                        "url": "https://rickandmortyapi.com/api/location/1"
                    }
                }
            )
        })
        const res = await getManyCharacters([1, 2, 3, 4, 5])
        console.log(res)
        expect(res).toEqual([
            {
                "name": "Rick Sanchez",
                "status": "Alive",
                "species": "Human"
            },
            {
                "name": "Morty Smith",
                "status": "Alive",
                "species": "Human"
            },
            {
                "name": "Summer Smith",
                "status": "Alive",
                "species": "Human"
            },
            {
                "name": "Beth Smith",
                "status": "Alive",
                "species": "Human"
            },
            {
                "name": "Jerry Smith",
                "status": "Alive",
                "species": "Human"
            }
        ])
    })
})