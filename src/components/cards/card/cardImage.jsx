import styled from "styled-components"


const CardImage = ({sprites}) =>{
    const dreamWorldImage = sprites.other.dream_world.front_default;
    return(

        <ImageContainer>
            <div className='pokeImage'><PokeImage src={dreamWorldImage}/></div>
        </ImageContainer>
    )
}

export default CardImage;

const ImageContainer = styled.div`
  margin: 10px;
  min-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex:1;
`

const PokeImage = styled.img`
  max-width: 200px;
  max-height: 200px;
  
`;