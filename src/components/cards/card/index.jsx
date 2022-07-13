import React from "react"
import styled from "styled-components"
import CardImage from "./cardImage"
import CardType from "./cardType"
import CardInfo from "./cardInfo";
import CardStats from "./cardStats";
import {FormGroup,Label,Col,Button} from "reactstrap"
import {IoCloseCircle} from "react-icons/io5"

const Card = ({pokemonDetail,removeCard,index}) => {
    return (
        <CardContainer>
            <Header>
                <Title>
                <h2>{pokemonDetail.name}</h2><Number>#{pokemonDetail.id}</Number>
                </Title>
                <SideHead>
                    <a onClick={()=>{removeCard(index)}}><CloseButton /></a>
                </SideHead>
            </Header>

            <Main>
                <CardImage sprites={pokemonDetail.sprites}/>
                <Side>
                    <CardType types = {pokemonDetail.types}/>
                    <CardInfo infos = {{height: pokemonDetail.height,weight: pokemonDetail.weight}}/>
                </Side>
            </Main>
            <Stats>
                <CardStats stats = {pokemonDetail.stats}/>
            </Stats>
        </CardContainer>
    )
}

export default Card;

const Title = styled.div`
  width: 17rem;
  display: inline-flex;
  flex-wrap: nowrap;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;

  
`
const SideHead = styled.div`
  margin-right: -20px;
  flex:1;
  display: grid;

  margin-top:-30px;
  
  
`

const CloseButton = styled(IoCloseCircle)`
  align-self: center;
  font-size: 30px;
  color: #fc1e1e;
  

  :hover {
    color: #fd4444;
    cursor: pointer;
  }
`

const CardContainer = styled.div`
  background-color: rgba(232, 150, 96, 0.46);
  border-radius: 15px;
  min-width: 360px;
  align-items: flex-start;
  gap: 50px;
  
  
`

const Header = styled.div`
  margin: 10px;
  padding: 5px;
  display:inline-flex;
  
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  gap: 50px;
  margin-left: -10px;
  
`

const Number = styled.div`
  background-color: white;
  display: flex;
  min-height: 40px;
  min-width: 50px;
  margin-top:0px ;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`
const Main = styled.div`
  margin: 10px;
  display: flex;
  
`

const Side = styled.div`
  margin: 10px;
  flex:0.6;
  display: grid;
  
`

const Stats = styled.div`
  margin: 10px;
  display: grid;
  
`