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
        Área de Administração
        </h1>
            <h2>Bem Vindo {auth.user?.email}</h2>
            <p>unique id: {auth.user?.uid}</p>
            <h4>JSON de autenticação do firebase:</h4> <p>{JSON.stringify(isAuthenticated.response)}</p>
            <h3>Seção demonstrativa, apenas mostrando  a criação do token presente no usuário que consta no firebase. Para voltar ao menu anterior mantendo o login, utilizar o botao "Home", para deslogar usar o botão "Logout"</h3>
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