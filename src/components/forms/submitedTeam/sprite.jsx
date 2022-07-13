import {Container} from "reactstrap"
import styled from "styled-components"
import {useEffect, useState} from "react";



const Sprite = ({sprites, spriteType}) => {
    const [spriteUrl, setSpriteUrl] = useState(sprites.front_default)
    const [allowShiny, setAllowShiny] = useState()
    const [isShiny, setIsShiny] = useState(false)
    const [lastSrc, setLastSrc] = useState(spriteUrl)

    const handleShiny = (e)=>{
        setLastSrc(spriteUrl);
        setIsShiny(false);
        if(allowShiny){
            if(!isShiny){
                setLastSrc(spriteUrl);
                setSpriteUrl(allowShiny);
                setIsShiny(true)
            }else{
                setSpriteUrl(lastSrc);
                setIsShiny(false)
            }
        }
    }

    useEffect(()=>{
        if(spriteType===2){
            setSpriteUrl(sprites.versions['generation-viii'].icons.front_default)
            setAllowShiny();
        }
        else if(spriteType===3){
            setSpriteUrl(sprites.other['official-artwork'].front_default)
            setAllowShiny();
        }
        else if(spriteType===4){
            setSpriteUrl(sprites.other.dream_world.front_default)
            setAllowShiny();
        }
        else if(spriteType===5){
            setSpriteUrl(sprites.other.home.front_default)
            setAllowShiny(sprites.other.home.front_shiny)
        }
        else{
            setSpriteUrl(sprites.front_default);
            setAllowShiny(sprites.front_shiny);

        }

    },[spriteType,sprites])

    return (

        <SpriteContainer>
            <SpriteImage allowShiny={allowShiny} src={spriteUrl} onClick={(e)=>{handleShiny(e)}}/>
        </SpriteContainer>
    )
}
export default Sprite;

const SpriteContainer = styled(Container)`
  flex: 0;
`

const SpriteImage = styled.img`
  max-width: 200px;
  max-height: 200px;

`;