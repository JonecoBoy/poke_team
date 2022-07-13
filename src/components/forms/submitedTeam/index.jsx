import React, {useState, useEffect} from "react"
import styled from "styled-components"
import TeamStats from "../teamForm/teamStats";
import {Button, Container, FormGroup, Input, Label} from "reactstrap";
import Sprite from "./sprite"
import Shiny from "../../../assets/types/shiny.png"


const Index = ({pokeTeam, teamName, setPokeTeam, setSubmitedForm}) => {

    const [spriteType, setSpriteType] = useState(1);

    useEffect(() => {
    }, [spriteType])

    const pokeTeamHps = pokeTeam.map((item) => {
        return (item.stats[0].base_stat)
    })
    const pokeTeamAtk = pokeTeam.map((item) => {
        return (item.stats[1].base_stat)
    })

    const pokeTeamDef = pokeTeam.map((item) => {
        return (item.stats[2].base_stat)
    })

    const pokeTeamSpAtk = pokeTeam.map((item) => {
        return (item.stats[3].base_stat)
    })

    const pokeTeamSpDef = pokeTeam.map((item) => {
        return (item.stats[4].base_stat)
    })

    const pokeTeamSpd = pokeTeam.map((item) => {
        return (item.stats[5].base_stat)
    })


    let pokeTeamAverages =
        {
            hp: pokeTeamHps.length > 0 ? pokeTeamHps.reduce((acumulator, item) => item + acumulator) / pokeTeam.length : 0,
            atk: pokeTeamAtk.length > 0 ? pokeTeamAtk.reduce((acumulator, item) => item + acumulator) / pokeTeam.length : 0,
            def: pokeTeamDef.length > 0 ? pokeTeamDef.reduce((acumulator, item) => item + acumulator) / pokeTeam.length : 0,
            spAtk: pokeTeamSpAtk.length > 0 ? pokeTeamSpAtk.reduce((acumulator, item) => item + acumulator) / pokeTeam.length : 0,
            spDef: pokeTeamSpDef.length > 0 ? pokeTeamSpDef.reduce((acumulator, item) => item + acumulator) / pokeTeam.length : 0,
            spd: pokeTeamSpd.length > 0 ? pokeTeamSpd.reduce((acumulator, item) => item + acumulator) / pokeTeam.length : 0,
        }

    return (
        <TeamFormDiv>

            <CheckBoxContainer>
                <FormGroup check inline>
                    <Input
                        name="radio2"
                        type="radio"
                        onClick={() => {
                            setSpriteType(1)
                        }}
                        onChange={() => {
                        }}
                        checked={spriteType === 1}
                    />
                    {' '}
                    <Label check>
                        Front Sprite<ShinyIcon src={Shiny} alt={"teste"}/>
                    </Label>
                </FormGroup>
                <FormGroup check inline>
                    <Input
                        name="radio2"
                        type="radio"
                        onClick={() => {
                            setSpriteType(2)
                        }}
                        onChange={() => {
                        }}
                        checked={spriteType === 2}
                    />
                    {' '}
                    <Label check>
                        Miniature
                    </Label>
                </FormGroup>

                <FormGroup check inline>
                    <Input
                        name="radio3"
                        type="radio"
                        onClick={() => {
                            setSpriteType(3)
                        }}
                        onChange={() => {
                        }}
                        checked={spriteType === 3}
                    />
                    {' '}
                    <Label check>
                        Oficial ArtWork
                    </Label>
                </FormGroup>

                <FormGroup check inline>
                    <Input
                        name="radio4"
                        type="radio"
                        onClick={() => {
                            setSpriteType(4)
                        }}
                        onChange={() => {
                        }}
                        checked={spriteType === 4}
                    />
                    {' '}
                    <Label check>
                        World
                    </Label>
                </FormGroup>

                <FormGroup check inline>
                    <Input
                        name="radio5"
                        type="radio"
                        onClick={() => {
                            setSpriteType(5)
                        }}
                        onChange={() => {
                        }}
                        checked={spriteType === 5}
                    />
                    {' '}
                    <Label check>
                        Home<ShinyIcon src={Shiny}/>
                    </Label>
                </FormGroup>

            </CheckBoxContainer>
            <h1>{teamName}</h1>
            <SpritesContainer>
                {pokeTeam.map((value, index) => {
                        return (
                            <Sprite key={index} spriteType={spriteType} sprites={value.sprites}/>
                        )
                    }
                )}
            </SpritesContainer>
            <StatsContainer>
                <TeamStats stats={pokeTeamAverages}/>
            </StatsContainer>

            <Button
                color="danger"
                onClick={() => {
                    setPokeTeam([]);
                    setSubmitedForm()
                }}
            >
                Reset
            </Button>

        </TeamFormDiv>
    )
}

export default Index

const TeamFormDiv = styled.div`
  min-height: 200px;
  background-color: rgba(232, 150, 96, 0.46);
  border-radius: 20px;
  margin: 0px;


  .inner {

    padding: 20px;
  }

  button {
    width: 250px;
    margin: 20px;
  }

  h1 {
    padding: 20px
  }
`
const StatsContainer = styled(Container)`
  padding: 10px;
  //uncomment for all stats in same row
  //display: flex;
  //flex: 0;
  //align-items: center;
  //justify-content: center;
  //align-content: center;
`
const CheckBoxContainer = styled(Container)`
  padding-top: 40px;
  
`

const SpritesContainer = styled(Container)`
  padding: 10px;
  display: flex;

`

const ShinyIcon = styled.img`
  margin-left: 3px;
  width: 20px;
`