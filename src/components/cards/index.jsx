import styled from "styled-components"
import Card from "./card"


const Index = ({pokeTeam,removeCard}) => {

    return(
        <CardsDiv>
            {pokeTeam.map((item,index)=>
                <Card className="inner" pokemonDetail={item} key={index} index={index}  removeCard={removeCard}/>
            )
            }


        </CardsDiv>
    )
}

export default Index;

const CardsDiv = styled.div `
  min-height: 200px;

  margin:0px;
  display:flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  gap:20px;
  .inner{
    padding: 20px;
    width: 500px;
  }
  flex-wrap: wrap;
`