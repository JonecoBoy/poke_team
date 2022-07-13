import styled from "styled-components"
import React, { useState,useEffect } from 'react'
import Select from 'react-select'
import {FormGroup,Label,Col,Button} from "reactstrap"
import makeAnimated from 'react-select/animated';
import {getRegions,getGenerationsByRegions,getPokemonsByGenerations,getPokemonsByType,getPokemonDetails} from "../../../services/pokemon.service"
import {getAllTypes} from "../../../services/poketypes.service"




// todo change alert to bootstrap alert


const animatedComponents = makeAnimated();

const Index = ({setPokeTeam,pokeTeam,setLoading}) => {

    const [region, setRegion] = useState([]);
    const [selectedRegions, setSelectedRegions] = useState([]);
    const [regionsPokemons, setRegionsPokemons] = useState([]);

    const [type, setType] = useState([]);
    const [selectedTypes, setSelectedTypes] = useState([]);
    const [typesPokemons, setTypesPokemons] = useState([]);
    const [pokemonsToSelect, setPokemonsToSelect] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState([]);


    useEffect(() => {
        (async ()=>{
            const regions = await getRegions();
            const types = await getAllTypes();
            setRegion(regions)
            setType(types)
        })();
    }, []);//passing effect empty , starts executing

    useEffect(()=>{
            (async ()=>{
               await handleChangePokeRegions();
               await handleChangePokeTypes();
            })();
        },[selectedRegions,selectedTypes])



    const handleChangePokeRegions = () => {
        // all calls to Async API functions must be async
        (async () => {
            const generations = await getGenerationsByRegions(selectedRegions)
            const generationsPokemons = await getPokemonsByGenerations(generations)
            // use this to transform array of arrays in one big array
            const allPokemonsByRegion = await generationsPokemons.flat();
            await setRegionsPokemons(allPokemonsByRegion)
            await handlePokemonsToSelect();
        })();

    }

    const handleChangePokeTypes =  () => {
        (async () => {
            const pokemonsOfTypes = await getPokemonsByType(selectedTypes);
            // use this to transform array of arrays in one big array
            const allPokemonsOfTypes = await pokemonsOfTypes.flat();
            await setTypesPokemons(allPokemonsOfTypes);
            await handlePokemonsToSelect();
        })();

    }

    const intersectPokemons = async (arrayA,arrayB)=>{

        // get only names, so i can use arrayFilter
        const arrayANames = await arrayA.map(({name}) => name)
        const arrayBNames = await arrayB.map(({name}) => name)

        const intersection = await arrayANames.filter(item => arrayBNames.includes(item));
        return await arrayA.filter(item => intersection.includes(item.name))

    }

    const handlePokemonsToSelect = async ()=>{

        const pokemons = await intersectPokemons(regionsPokemons,typesPokemons)

        const pokemonsToSelectPromise= await pokemons.map(async({name,url})=>{

           return await {value: name, label: name, url: url}
        });

        setPokemonsToSelect(await Promise.all(pokemonsToSelectPromise));
    }

    const addPokemonToTeam = async ()=>{
        const pokemonDetails = await getPokemonDetails(selectedPokemon.value);

        const treatedPokemonDetails = await treatPokemonDetails(pokemonDetails);
        if(pokeTeam.length<6) {
            await setPokeTeam(
                [...pokeTeam, treatedPokemonDetails]
            )

            await setSelectedPokemon([]);
            await setPokemonsToSelect(
                await pokemonsToSelect.filter((pokemon)=>{
                return (pokemon.value!=selectedPokemon.value)}
                )
            )
        }
        else{
            alert('Maximum Pokémon Team Size is 6.')
        }
    }

    const addRandomPokemonToTeam = async ()=>{

        const randomNumber = Math.floor(Math.random() * pokemonsToSelect.length);
        const randomPokemon = pokemonsToSelect[randomNumber];


        const pokemonDetails = await getPokemonDetails(randomPokemon.value);
        const treatedPokemonDetails = await treatPokemonDetails(pokemonDetails);
        if(pokeTeam.length<6) {
            await setPokeTeam(
                [...pokeTeam, treatedPokemonDetails]
            )
            await setSelectedPokemon([]);

        }
        else{
            alert('Maximum Pokémon Team Size is 6')
        }
    }

    const treatPokemonDetails = async (pokemonDetails)=>{

        return   {
            id: pokemonDetails.id,
            order: pokemonDetails.order,
            name: pokemonDetails.name,
            types:pokemonDetails.types,
            sprites: pokemonDetails.sprites,
            stats: pokemonDetails.stats,
            weight: pokemonDetails.weight,
            height: pokemonDetails.height,
        }

    }


    return(
        <SearchFormDiv>
            <div className={'inner'}>
                <FormGroup row>
                    <Label
                        for="exampleEmail"
                        sm={1}
                    >
                        Region
                    </Label>
                    <Col sm={3}>
                        <Select
                            // onChange will write a state that have all selected states, them once you get out of the select, it will trigger another event.
                            // so we can get the info from the api
                            // no need to create a handle before the set, so the it will populate the variable with all information in the object.
                            // so just need to put some destructuring when calling the apiService
                            onChange={setSelectedRegions}
                            onBlur={handleChangePokeRegions}
                            closeMenuOnSelect={false}
                            components={animatedComponents}
                            isMulti
                            options={
                                region.map((item,key)=>{
                                    return({
                                        // in react-select lib label is used for the appearing value in the select
                                        label:item.name,value:item.name, url: item.url
                                    })
                                })
                            }
                        />
                        {/*{JSON.stringify(selectedRegions)}*/}
                    </Col>
                    <Label
                        for="types"
                        sm={1}
                    >
                        Types
                    </Label>
                    <Col sm={7}>
                        <Select
                            onChange={setSelectedTypes}
                            onBlur={handleChangePokeTypes}
                            closeMenuOnSelect={false}
                            components={animatedComponents}
                            isMulti
                            options={type}
                        />
                        {/*{JSON.stringify(selectedTypes)}*/}
                    </Col>

                </FormGroup>
                {/*TODO implement other filters*/}
                {/*<FormGroup row>*/}
                {/*    <Label*/}
                {/*        for="exampleEmail"*/}
                {/*        sm={2}*/}
                {/*    >*/}
                {/*        Allow Legendaries*/}
                {/*    </Label>*/}
                {/*    <Col sm={2}>*/}
                {/*        <Select*/}
                {/*            options={[{value:1, label: 'Yes'},{value:0, label:'No'}]}*/}
                {/*            defaultValue={{value:1, label: 'Yes'}}*/}
                {/*            onChange={setAllowLegendaries}*/}
                {/*            isSearchable*/}
                {/*        />*/}
                {/*    </Col>*/}
                {/*    <Label*/}
                {/*        for="exampleEmail"*/}
                {/*        sm={1}*/}

                {/*    >*/}
                {/*        Evolutions*/}
                {/*    </Label>*/}
                {/*    <Col sm={3}>*/}
                {/*        <Select*/}
                {/*            closeMenuOnSelect={false}*/}
                {/*            components={animatedComponents}*/}
                {/*            isDisabled={true}*/}
                {/*            placeholder= "Disabled"*/}

                {/*            isMulti*/}

                {/*        />*/}
                {/*        <span>comming soon</span>*/}
                {/*    </Col>*/}

                {/*    <Label*/}
                {/*        for="exampleEmail"*/}
                {/*        sm={1}*/}
                {/*    >*/}
                {/*        Encouter Type*/}
                {/*    </Label>*/}
                {/*    <Col sm={3}>*/}
                {/*        <Select*/}
                {/*            closeMenuOnSelect={false}*/}
                {/*            components={animatedComponents}*/}
                {/*            isDisabled={true}*/}
                {/*            placeholder= "Disabled"*/}
                {/*            isMulti*/}
                {/*            // options={PokeEvo}*/}
                {/*        />*/}
                {/*        <span>comming soon</span>*/}
                {/*    </Col>*/}

                {/*</FormGroup>*/}

                <Select
                    options={pokemonsToSelect}
                    onChange={setSelectedPokemon}
                    placeholder= "Select Pokémon"
                    isSearchable
                />
            </div>
            <ButtonsContainer>
                <Button
                    color="info"
                    onClick={addRandomPokemonToTeam}

                    disabled={(selectedRegions.length===0 && selectedTypes.length===0)}
                >
                    Random
                </Button>

                <Button
                    color="primary"
                    onClick={addPokemonToTeam}

                    disabled={(selectedPokemon.length===0)}
                >
                   Add Pokémon
                </Button>
            </ButtonsContainer>
            {/*{JSON.stringify(pokeTeam)}*/}

        </SearchFormDiv>
    )
}

export default Index;

const SearchFormDiv = styled.div `
min-height: 200px;
  background-color: rgba(232, 150, 96, 0.46);
  border-radius: 20px;
  
  .inner{
    
    padding: 20px;
  }
`

const ButtonsContainer = styled.div `
  margin-top:20px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: right;
  gap:20px;
  padding:20px;
`


