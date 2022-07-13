import React from "react";
import {Router} from "@reach/router";
import Layout from "../components/layout";
import Home from "./home";


const Sobre = ({setAlertMessage,setShowAlert}) => <div>Sobre</div>;

    const Views = ({isAuthenticated,onLogout})=>{
        return(
            <Layout isAuthenticated={isAuthenticated} onLogout={onLogout}>
                <Router>
                    <Home path={"/*"}/>
                    {/*<Sobre path={"/sobre"}/>*/}

                </Router>
            </Layout>

        )
    }

    export default Views