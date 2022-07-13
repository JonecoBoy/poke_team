import React from "react";
import Header from "./header";
import Footer from "./footer";
import styled from "styled-components";
import {Alert} from "reactstrap"

const Layout = ({children, isAuthenticated,onLogout}) => { // {children} destructure desse parametro dentro do objeto props
    return (
        <>

            <Header isAuthenticated={isAuthenticated} onLogout={onLogout}/>
            <Main>{children}</Main>

            <Footer/>
        </>
    )
}


export default Layout;

const Main = styled.div `
display:flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex-flow: row wrap;
  justify-content: center;
  margin: 50px;
`
const ShowAlert = styled(Alert)`
  position: fixed;
`