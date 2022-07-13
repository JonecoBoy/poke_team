import bug from "../assets/types/bug.svg";
import dark from "../assets/types/dark.svg";
import dragon from "../assets/types/dragon.svg";
import electric from "../assets/types/electric.svg";
import fairy from "../assets/types/fairy.svg";
import fighting from "../assets/types/fighting.svg";
import fire  from "../assets/types/fire.svg";
import flying  from "../assets/types/flying.svg";
import ghost  from "../assets/types/ghost.svg";
import grass  from "../assets/types/grass.svg";
import ground  from "../assets/types/ground.svg";
import ice  from "../assets/types/ice.svg";
import normal from "../assets/types/normal.svg";
import poison  from "../assets/types/poison.svg";
import psychic  from "../assets/types/psychic.svg";
import rock  from "../assets/types/rock.svg";
import steel  from "../assets/types/steel.svg";
import water from "../assets/types/water.svg";

export const getAllTypes =  async ()=>{
const PokeTypes = [
    {value: 'bug', label: <div><img alt="bug" src={bug} height="30px" width="30px"/>Bug</div>},
    {value: 'dark', label: <div><img alt="dark" src={dark} height="30px" width="30px"/>Dark</div>},
    {value: 'dragon', label: <div><img alt="dragon" src={dragon} height="30px" width="30px"/>Dragon</div>},
    {value: 'electric', label: <div><img alt="electric" src={electric} height="30px" width="30px"/>Electric</div>},
    {value: 'fairy', label: <div><img alt="fairy" src={fairy} height="30px" width="30px"/>Fairy</div>},
    {value: 'fighting', label: <div><img alt="fighting" src={fighting} height="30px" width="30px"/>Fighting</div>},
    {value: 'fire', label: <div><img alt="fire" src={fire} height="30px" width="30px"/>Fire</div>},
    {value: 'flying', label: <div><img alt="flying" src={flying} height="30px" width="30px"/>Flying</div>},
    {value: 'ghost', label: <div><img alt="ghost" src={ghost} height="30px" width="30px"/>Ghost</div>},
    {value: 'grass', label: <div><img alt="grass" src={grass} height="30px" width="30px"/>Grass</div>},
    {value: 'ground', label: <div><img alt="ground" src={ground} height="30px" width="30px"/>Ground</div>},
    {value: 'ice', label: <div><img alt="ice" src={ice} height="30px" width="30px"/>Ice</div>},
    {value: 'normal', label: <div><img alt="normal" src={normal} height="30px" width="30px"/>Normal</div>},
    {value: 'poison', label: <div><img alt="poison" src={poison} height="30px" width="30px"/>Poison</div>},
    {value: 'psychic', label: <div><img alt="psychic" src={psychic} height="30px" width="30px"/>Psychic</div>},
    {value: 'rock', label: <div><img alt="rock" src={rock} height="30px" width="30px"/>Rock</div>},
    {value: 'steel', label: <div><img alt="steel" src={steel} height="30px" width="30px"/>Steel</div>},
    {value: 'water', label: <div><img alt="water" src={water} height="30px" width="30px"/>Water</div>},
]
    return PokeTypes

}
