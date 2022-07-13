import styled from "styled-components";

const Footer = () => {
    return(
      <FooterContainer>
          Created by Joneco. All Rights to Nintendo.
      </FooterContainer>

    );
};

export default Footer;

const FooterContainer = styled.div`
    border-top: 3px solid #92a9d8;
    text-align: center;  
    color: #fff;
    padding: 12px 10px;
    font-family: "Roboto", sans-serif;
    background: rgb(247,225,189);
    background: linear-gradient(180deg, rgba(247,225,189,1) 0%, rgba(185,136,103,1) 50%);
    min-height: 100px;
    align-items: center;
    justify-content: center;
    display: flex;
`;