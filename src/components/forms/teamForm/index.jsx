import styled from "styled-components"
import React from 'react'
import {FormGroup, Label, Input, Col, Button} from 'reactstrap'
import TeamStats from "./teamStats";
import {useFormik} from "formik";

const Index = ({pokeTeam, setPokeTeam, setSubmitedForm, setTeamName}) => {
    const formik = useFormik({
        initialValues: {
            teamName: "",
        },
        onSubmit: async (values, {setErrors}) => {
            if(!(values.teamName.length > 3)){
                alert('Team Name Must Have At Least 4 Characters!')
            }
            else{
                setTeamName(values.teamName)
                setSubmitedForm(true)
            }
        },


    })

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

            <div className={'inner'}>
                <h2>My Team</h2>
                <Form inline onSubmit={formik.handleSubmit}>
                    <FormGroup row>
                        <Label
                            for="teamName"
                            sm={2}
                        >
                            Team Name
                        </Label>
                        <Col sm={9}>
                            <Input
                                {...formik.getFieldProps('teamName')}
                                name="teamName"
                                placeholder="digite o nome do seu time"
                                type="text"
                            />
                        </Col>

                        <StatsContainer>
                            <TeamStats stats={pokeTeamAverages}/>
                        </StatsContainer>
                        <ButtonsContainer>
                            <Button
                                color="danger"
                                onClick={() => {
                                    setPokeTeam([])
                                }}
                                disabled={(pokeTeam.length===0)}
                            >
                                Reset
                            </Button>
                            <Button
                                color="success"
                                type="submit"
                                disabled={(pokeTeam.length===0)}

                            >
                                Submit
                            </Button>
                        </ButtonsContainer>

                    </FormGroup>
                </Form>
            </div>
        </TeamFormDiv>
    )
}

export default Index;

const TeamFormDiv = styled.div`
  min-height: 350px;
  background-color: rgba(232, 150, 96, 0.46);
  border-radius: 20px;
  margin: 0px;

  .inner {

    padding: 30px;
  }

`
const StatsContainer = styled.div`
  padding: 30px;
`

const Form = styled.form`
  padding: 30px;

  .teamName {
    margin-right: 200px;
  }
`

const ButtonsContainer = styled.div`
  padding-top: 30px;
  padding-right: 30px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: right;
  gap: 20px;
`