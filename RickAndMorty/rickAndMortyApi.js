const fetch = require('node-fetch');

const URL = 'https://rickandmortyapi.com/api/character/'

const getCharacter = async (id) => {
    return await fetch(`${URL}${id}`)
        .then(res => res.json())
        .then(({ name, status, species }) => {
            return {
                name,
                status,
                species
            }
        })
        .catch(e => {
            console.log('There has been a problem with your fetch operation: ' + e.message);
        })
}

const getManyCharacters = async (ids) => {
    return await Promise.all(ids.map(id => getCharacter(id)));
}


module.exports = {
    getCharacter,
    getManyCharacters
}