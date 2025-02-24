const pokemons = [
  {
    name: "Pikachu",
    type: "electric",
  },
  {
    name: "Bulbasur",
    type: "grass",
  },
  {
    name: "Eevee",
    type: "normal",
  },
  {
    name: "Mew",
    type: "psy",
  },
  {
    name: "Squirtle",
    type: "water",
  },
  {
    name: "Charmander",
    type: "fire",
  },
  {
    name: "Charizard",
    type: "fire",
  },
];

const inputBusqueda = document.getElementById("busquedaPokemon");
const listaPokemon = document.getElementById("listaPokemon");

const mostrarPokemons = (listaObjetosPokemons) => {
  listaPokemon.innerHTML = "";
  listaObjetosPokemons.forEach((pokemon) => {
    const itemPokemon = document.createElement("li");
    itemPokemon.innerHTML = `
    <hr/>
    <p><b>Pokemon:</b> ${pokemon.name}</p>
    <p><b>Tipo:</b> ${pokemon.type}</p>
    `;
    listaPokemon.appendChild(itemPokemon);
  });
};

const buscarPokemon = (event) => {
  const valorBusqueda = event.target.value.toLowerCase();
  const pokemonsFiltrados = pokemons.filter((pokemon) => {
    return pokemon.name.toLowerCase().includes(valorBusqueda);
  });
  mostrarPokemons(pokemonsFiltrados);
};

inputBusqueda.addEventListener("input", buscarPokemon);

mostrarPokemons(pokemons);
