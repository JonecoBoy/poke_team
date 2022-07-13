import React from "react"
import styled from "styled-components"

const cardInfo = ({infos})=>{

    return(
        <CardInfoContainer>
            <p>Weight: {infos.weight} Kg</p>
            <p>Height: {infos.height} m</p>
        </CardInfoContainer>
    )
}

export default cardInfo;

const CardInfoContainer = styled.div`
  margin-bottom:10px;
p{
font-size: 0.7rem;  
}
`