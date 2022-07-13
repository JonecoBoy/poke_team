import Banner from "../components/banner";
import SearchForm from "../components/forms/searchForm"
import TeamForm from "../components/forms/teamForm"
import Cards from "../components/cards"
import styled from "styled-components"
import React, {useState,useEffect} from 'react';
import SubmitedTeam from "../components/forms/submitedTeam";
import {Spinner} from "reactstrap";

const Home = ({isAuthenticated}) => {
    const [pokeTeam, setPokeTeam] = useState([]);
    const [submitedForm, setSubmitedForm] = useState();
    const [teamName, setTeamName] = useState();
    const [loading, setLoading] = useState(false)

    const removeCard = (pokemonIndex)=>{
        const teamWithoutRemovedPokemon = pokeTeam.filter((item,index)=>{
            return(index!==pokemonIndex)
        })
        setPokeTeam(teamWithoutRemovedPokemon)
    }

    // const addPokemonToTeam = (pokemon) => {
    //     setPokeTeam(pokemon)
    // }

    return (
        <>
            <Banner/>
            <Content>
                {!submitedForm
                    ? !loading ? <SearchForm pokeTeam={pokeTeam} setPokeTeam={setPokeTeam} setLoading={setLoading} className="flex-item"/>:<Spinner/>
                    : null}
                {!submitedForm
                    ? <TeamForm pokeTeam={pokeTeam} setPokeTeam={setPokeTeam} setSubmitedForm={setSubmitedForm}
                                setTeamName={setTeamName} className="flex-item"/>
                    : <SubmitedTeam setSubmitedForm={setSubmitedForm} setPokeTeam={setPokeTeam} teamName={teamName}
                                    pokeTeam={pokeTeam} className="flex-item"/>
                }
                {!submitedForm
                    ? <Cards removeCard={removeCard} pokeTeam={pokeTeam} className="flex-item"/>
                    : null
                }

            </Content>
        </>
    )

};

export default Home;

const Content = styled.div`

  justify-content: center;
  text-align: center;
  flex: 1;
  align-items: center;
  margin-left: 100px;
  margin-right: 100px;
  margin-top: 20px;
  max-width: 1500px;
  min-width: 600px;

  > * {
    margin-top: 20px;
    margin-bottom: 20px;
  }

`