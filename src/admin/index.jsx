import React from "react"
import {Container,Button} from "reactstrap"
import {navigate, Redirect, Router} from "@reach/router"
import styled from "styled-components"
const backToHome = () =>{
    navigate("/")
}

const Admin = ({isAuthenticated,onLogout})=>{
    const auth = isAuthenticated.response;
    return (
        <Container>
            <p></p>
        <h1>
        Administration Zone
        </h1>
            <h2>Welcome {auth.user?.email}</h2>
            <p>unique id: {auth.user?.uid}</p>
            <h4>fireabse authentication json:</h4> <p>{JSON.stringify(isAuthenticated.response)}</p>
            <h3>Demo section, just showing the creation of the token for a user in firebase. To return to the previous menu while maintaining the login information, use the "Home" button. To log out, use the button"Logout"</h3>
            <ButtonAdmin
                color="danger"
            onClick={()=>{onLogout()}}
            >
                Logout
            </ButtonAdmin>

            <ButtonAdmin
                color="info"
                onClick={()=>{backToHome()}}
            >
                Home
            </ButtonAdmin>

        </Container>
    )
}

export default Admin

const ButtonAdmin = styled(Button)`
margin-left:10px;
`
