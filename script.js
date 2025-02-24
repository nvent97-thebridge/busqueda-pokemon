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

const listaPokemon = document.getElementById("listaPokemon");

pokemons.forEach((pokemon) => {
  const itemPokemon = document.createElement("li");
  itemPokemon.innerHTML = `
  <hr/>
  <p><b>Pokemon:</b> ${pokemon.name}</p>
  <p><b>Tipo:</b> ${pokemon.type}</p>
  `;
  listaPokemon.appendChild(itemPokemon);
});
