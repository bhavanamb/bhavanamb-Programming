const pokemon = [
  { name: "charmander", type: "fire" },
  { name: "squirtle", type: "water" },
  { name: "bulbasaur", type: "grass" },
];
// We want to change this object to look like:

// const pokemonModified = {
//   charmander: { type: "fire" },
//   squirtle: { type: "water" },
//   bulbasaur: { type: "grass" }
// };

function changeObject(pokemon) {
  return pokemon.reduce((finalObj, curr) => {
    finalObj[curr.name] = { type: curr.type };
    return finalObj;
  }, {});
}
console.log(changeObject(pokemon));
