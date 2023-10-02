function convertPokemonTypesToLi(pokemonTypes){
  return pokemonTypes.map((typeSlot) => `<li classe "type">${typeSlot.type.name}</li>`)
}

function convertPokemonToLi(pokemon){
    return `
    <li class="pokemon">
          <span class="number">#${pokemon.order}</span>
          <span class="name">${pokemon.name}</span>
               
          <div class="detail">
              <ol class="types">
                   ${convertPokemonTypesToLi(pokemon.types).join('')}
              </ol>

            <img src="${pokemon.sprites.other.dream_world.front_default}"
                alt="${pokemon.name}">
          </div>              
        </li> 
    `
}
const pokemonList =document.getElementById('pokemonList')

 pokeApi.getPokemons().then((pokemons = []) => {   
       
// const newList = pokemons.map((pokemon) => convertPokemonToLi(pokemon))
// const newList = pokemons.map((pokemon) => (pokemon))
// const newList = pokemons.map(convertPokemonToLi)
//const newList = pokemons.map(convertPokemonToLi).join('')


//const newHtml = newList.join('')

//const newHtml = newList

//pokemonList.innerHTML += newHtml

    pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('')

 })