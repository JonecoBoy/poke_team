import axios from "axios";
const PokeApi = "https://pokeapi.co/api/v2"

export const getRegions =  async ()=>{
    const res = await axios.get(PokeApi+"/region");
    const regions = await res.data.results
    return regions

}

export const getGenerations =  async ()=>{
    const res = await axios.get(PokeApi+"/generation");
    const generations = await res.data.results
    return generations

}


export const getGenerationsByRegions = async (regions)=>{
    const generationsPromises = regions.map(async ({url})=>{
                    let resRegion = await axios.get(url);
                    return resRegion.data.main_generation
    })
    return await Promise.all(generationsPromises);


}

export const getPokemonsByGenerations = async (generations)=>{
    const pokemonsPromises = generations.map(async({url})=>{
        const generationData = await axios.get(url)
        return generationData.data.pokemon_species
    })
    return await Promise.all(pokemonsPromises)
}

export const getPokemonsByType = async (types)=>{
        const PokemonsOfTypesPromise = types.map(async(type)=>{
        const typeData = await axios.get(PokeApi+"/type/"+type.value)
        const pokemons = typeData.data.pokemon;
        //remodel structure inside pokemons array there is a pokemon object, so remove that object.
        const treatedPokemonsPromise = pokemons.map(async ({pokemon})=>{
        return {name: pokemon.name,url: pokemon.url}
        })
        return await Promise.all(treatedPokemonsPromise);

        })
        return await Promise.all(PokemonsOfTypesPromise)
}

export const getPokemonDetails = async (pokemonName)=>{
    const pokemonData = await axios.get(PokeApi + "/pokemon/"+ pokemonName);
    return pokemonData.data
}

