function voltar() {
    window.location.href="/index.html"
}

function convertTypesToOl(types){
    return `<ol class="tipo-pokemon">
    ${types.map((type) => `<li class="tipo ${type}">${type}</li>`).join('')}
</ol>`;
}

function carregarDadosPokemon() {
    let idPokemon = sessionStorage.getItem("id_pokemon");
    
    pokeApi.getPokemonDetailById(idPokemon)
        .then(pokemon => {
            document.getElementById('nomePokemon').innerHTML=pokemon.name;
            document.getElementById('numeroPokemon').innerHTML='#'+ pokemon.number;
            document.getElementById('tiposPokemon').innerHTML=convertTypesToOl(pokemon.types);
            document.getElementById('cardPokemon').classList.add(pokemon.type);
            document.getElementById('imagemPokemon').setAttribute('src', pokemon.photo);
            document.getElementById('pokemonEspecie').innerHTML=pokemon.species;
            document.getElementById('pokemonHeight').innerHTML=pokemon.height;
            document.getElementById('pokemonWeight').innerHTML=pokemon.weight;
            document.getElementById('pokemonAbilities').innerHTML=pokemon.abilities;


            console.info(pokemon);
        });
}

carregarDadosPokemon();
