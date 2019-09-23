import pokemons from "../pokemons/pokemons.json";

export async function getPokemons(args) {
  return pokemons.slice(0, args.first);
}

export async function getPokemonsByName(args) {
  let searchName = args.name.toLowerCase();
  return pokemons.filter(p => p.name.toLowerCase().includes(searchName));
}

export async function getPokemonById(pokemonId) {
  const pokemon = pokemons.filter(
    ({ id }) => parseInt(id, 10) === parseInt(pokemonId, 10)
  );

  return pokemon[0] || null;
}

export async function getPokemonByName(pokemonNameSearch) {
  const pokemonName = pokemonNameSearch.toLowerCase().trim();

  let pokemon = pokemons.filter(
    ({ name }) => name.toLowerCase() === pokemonName
  );
  if (!pokemon) {
    // no match found we try at least partial match
    pokemon = pokemons.filter(({ name }) => name.includes(name.toLowerCase()));
  }

  if (pokemon) {
    return pokemon[0];
  }

  return pokemon[0] || null;
}

export async function getPokemonByEvolutions(evolutions) {
  if (!evolutions) {
    return null;
  }

  const pokemonNames = evolutions.map(evolution =>
    evolution.name.toLowerCase().trim()
  );

  const searchedPokemons = pokemons.filter(
    ({ name }) => pokemonNames.indexOf(name.toLowerCase()) !== -1
  );

  return searchedPokemons || null;
}
