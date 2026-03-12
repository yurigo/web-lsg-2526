
// const pokedex = document.querySelector("#pokedex");
// const pokemones = fetch("https://pokeapi.co/api/v2/pokemon")
// console.log(pokemones)

// pokemones.then(function (response) {
//     console.log(response);
//     const data = response.json();
//     console.log(data);

//     data.then((info) => {
//         console.log(info);
//     })

// });



const pokedex = document.querySelector("#pokedex");

const pokemones = fetch("https://pokeapi.co/api/v2/pokemon")
console.log(pokemones)

pokemones.then(function (response) {
    console.log(response);
    return response.json();
}).then(data => {
    console.log(data);
    // hacer cosas!!

    data.results.forEach( elem => {
        const pokemon = document.createElement("div");
        pokemon.classList.add("pokemon");
        pokemon.innerHTML=`<h2>${elem.name}</h2>`;

        pokedex.appendChild(pokemon);

    })

}).catch(error => {
    console.log(error);
})

//syntax sugar: promises with async/await

async function run() {   
    try {

        const response = await fetch("https://pokeapi.co/api/v2/pokemon");
        const data = await response.json();
        
        data.results.forEach( elem => {
            const pokemon = document.createElement("div");
            pokemon.classList.add("pokemon sugar");
            pokemon.innerHTML=`<h2>${elem.name}</h2>`;
            
            pokedex.appendChild(pokemon);
            
        })
    }catch(ex){
        console.log(ex)
    }
    
    return data.results;
}

run();