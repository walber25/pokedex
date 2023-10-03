// const pokemonList = document.getElementById('pokemonList');
// const loadMoreButton = document.getElementById('loadMoreButton');

// const maxRecords = 151
// const limit = 10
// let offset = 0;

//  function loadPokemonItens(offset, limit) {
//   pokeApi.getPokemons(offset, limit).then((pokemons = []) => {   
//     const newHtml = pokemons.map((pokemon) => `
//           <li class="pokemon ${pokemon.type}">
//                 <span class="number">#${pokemon.number}</span>
//                 <span class="name">${pokemon.name}</span>
                    
//                 <div class="detail">
//                     <ol class="types">
//                         ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
//                     </ol>

//                   <img src="${pokemon.photo}"
//                       alt="${pokemon.name}">
//                 </div>              
//               </li> 
//           `).join('')
//     pokemonList.innerHTML += newHtml
//  }

//  )}

//  loadPokemonItens(offset, limit)

//  loadMoreButton.addEventListener('click', () =>{
//     offset += limit
//     const qtdRecordsWithNexPage = offset + limit
   
//     if (qtdRecordsWithNexPage >= maxRecords) {
//       const newLimit = maxRecords - offset
//       loadPokemonItens(offset, newLimit)

//       loadMoreButton.parentElement.removeChild(loadMoreButton)
//     }else {
//       loadPokemonItens(offset, limit)
//     }
//  })



const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton');

const maxRecords = 151;
const limit = 10;
let offset = 0;

function loadPokemonItens(offset, limit) {
  pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    const newHtml = pokemons.map((pokemon) => `
        <li class="pokemon ${pokemon.type}">
        <!-- redireciona para outra pagina-->
          <a href="mais-detalhe.html"> 
          <span class="number">#${pokemon.number}</span>
          <span class="name">${pokemon.name}</span>
                    
          <div class="detail">
            <ol class="types">
               ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
            </ol>           
            
            <img src="${pokemon.photo}" class="imagemClicavel" alt="${pokemon.name}">
          </div>              
        </li> 
      `)
      .join('');
    
    pokemonList.innerHTML += newHtml;

    // // Adicione o evento de clique a cada imagem recém-criada
    // const imagensClicaveis = document.querySelectorAll('.imagemClicavel');
    // // imagensClicaveis.forEach((imagem) => {
    // //   imagem.addEventListener('click', () => {
    // //     const novaPaginaURL = 'https://www.dio.me/';
    // //     // Abre a nova página em uma nova janela ou guia do navegador
    // //     window.open(novaPaginaURL, '_blank');
    // //   });
    // // });

    //   imagensClicaveis.forEach((imagem) => {
    //   imagem.addEventListener('click', () => {
    //     const novaPaginaURL = 'https://www.dio.me/';

    //   // Redireciona para a nova página na mesma aba
    //     window.location.href = novaPaginaURL;
    //   });
    // });

  });
}

loadPokemonItens(offset, limit);

loadMoreButton.addEventListener('click', () => {
  offset += limit;
  const qtdRecordsWithNexPage = offset + limit;

  if (qtdRecordsWithNexPage >= maxRecords) {
    const newLimit = maxRecords - offset;
    loadPokemonItens(offset, newLimit);

    loadMoreButton.parentElement.removeChild(loadMoreButton);
  } else {
    loadPokemonItens(offset, limit);
  }
});
