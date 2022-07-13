import React from "react"
import styled from "styled-components"
import bug from "../../../assets/types/bug.svg"
import dark from "../../../assets/types/dark.svg"
import dragon from "../../../assets/types/dragon.svg"
import electric from "../../../assets/types/electric.svg"
import fairy from "../../../assets/types/fairy.svg"
import fighting from "../../../assets/types/fighting.svg"
import fire from "../../../assets/types/fire.svg"
import flying from "../../../assets/types/flying.svg"
import ghost from "../../../assets/types/ghost.svg"
import grass from "../../../assets/types/grass.svg"
import ground from "../../../assets/types/ground.svg"
import ice from "../../../assets/types/ice.svg"
import normal from "../../../assets/types/normal.svg"
import poison from "../../../assets/types/poison.svg"
import psychic from "../../../assets/types/psychic.svg"
import rock from "../../../assets/types/rock.svg"
import steel from "../../../assets/types/steel.svg"
import water from "../../../assets/types/water.svg"

const typeImage = (typeName) => {

    if (typeName === "bug") {
        return bug
    }
    else if (typeName === "dark") {
        return dark
    }
    else if (typeName === "dragon") {
        return dragon
    }
    else if (typeName === "electric") {
        return electric
    }
    else if (typeName === "fairy") {
        return fairy
    }
    else if (typeName === "fighting") {
        return fighting
    }
    else if (typeName === "fire") {
        return fire
    }
    else if (typeName === "flying") {
        return flying
    }
    else if (typeName === "ghost") {
        return ghost
    }
    else if (typeName === "grass") {
        return grass
    }
    else if (typeName === "ground") {
        return ground
    }
    else if (typeName === "ice") {
        return ice
    }
    else if (typeName === "normal") {
        return normal
    }
    else if (typeName === "poison") {
        return poison
    }
    else if (typeName === "psychic") {
        return psychic
    }
    else if (typeName === "rock") {
        return rock
    }
    else if (typeName === "steel") {
        return steel
    }
    else if (typeName === "water") {
        return water
    }

}

const CardType = ({types}) => {

    return (
        <CardTypeContainer>
            <div>

                {types.map((item,index)=>{
                    return(
                        <PokeTypeImage src={typeImage(item.type.name)} alt={item.type.name} key={index}/>
                    )
                })}


            </div>
            <h5>Types</h5>
        </CardTypeContainer>
    )
}

export default CardType;

const CardTypeContainer = styled.div`
  margin-top: 10px;
  margin-bottom: 3rem;
  
`

const PokeTypeImage = styled.img`
  max-width: 100%;
  max-height: 40px;
  
`;