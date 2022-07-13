import styled from "styled-components";
import grass from "../../../assets/images/headers/grass.png"
import NavBar from "./navbar"

const Index = ({isAuthenticated,onLogout}) => {
    return(
        <HeaderContainer>
             <Logo>
                 <BannerImage src={grass}/>
                 <span>PokeTeam</span>
             </Logo>
            <NavBarContainer>
                <NavBar isAuthenticated={isAuthenticated} onLogout={onLogout}/>
            </NavBarContainer>
            {JSON.stringify()}
        </HeaderContainer>
    );
};

export default Index;

const HeaderContainer = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  //background: linear-gradient(180deg, rgba(33,159,148,1) 0%, rgba(125,197,166,1) 82%, rgba(128,198,167,1) 82%, rgba(194,225,180,1) 100%);
  background: rgba(33,159,148,1);
  align-items: center;
  justify-content: center;
  gap:50px;
  
`;

const Logo = styled.div`
  color: #00305a;
  font-weight: 600;
  font-size: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap:20px;
  span{
    color: whitesmoke;
  }
`;

const BannerImage = styled.img`
  max-width: 100%;
  max-height: 45px;

`;

const NavBarContainer = styled.div`
  color: #00305a;
  font-weight: 600;
  font-size: 20px;
  a{color:whitesmoke;}
  a:hover{color:lightgray;}
  a:focus{color:lightgray;}
  .dropdown-menu button:focus{
    background-color:lightgrey;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  gap:20px;
  color: whitesmoke;

    `;