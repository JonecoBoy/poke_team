import {navigate, Redirect, Router} from "@reach/router"


import Views from "./views"
import Login from "./auth/login";
import Admin from "./admin";
import React, {useEffect, useState} from "react";
import  {saveAuth, getAuth,clearAuth} from "./config/storage"
import {firebase,auth} from "./config/firebase"

const PrivateRoute = ({component:Component,isAuthenticated,onLogout, ...rest}) =>{

    if (!isAuthenticated.status){
        return <Redirect to = "/login" noThrow/>;
    }
    else{
        return <Admin path={"/admin"} isAuthenticated={isAuthenticated} onLogout={onLogout}/>
    }

}

const Routers = () =>{
    const [isAuthenticated,setIsAuthenticated] = useState({status:false, response:[]});
    const [storageAuth, setStorageAuth] = useState(getAuth());

    useEffect(()=>{
        const {REACT_APP_TOKEN:token} = process.env
        const storageToken = storageAuth?.user.uid;
        console.log(token);
        if(storageToken === token){
            setIsAuthenticated({status: true,response: storageAuth})
        }
        else{
            console.log("diferente")
        }
    },([storageAuth]))


    const onLogin = async (email,password)=>{
       try {

           let res = await firebase
               .auth()
               .signInWithEmailAndPassword(email,password);
           setIsAuthenticated({status:true,response:res})
           saveAuth(res);
           setStorageAuth(res);
           let token = await firebase.auth().currentUser.getIdToken();
       }
       catch(e){
           // setIsAuthenticated({status:false})
           console.log(e)
       }
    }
    const onLogout = async ()=>{
        try {
            navigate("/")
            await firebase
                .auth()
                .signOut()
            setIsAuthenticated({status: false})
            clearAuth()
        }
        catch(e){
            console.log(e)
        };
    }

    return(
        <Router>
            <Views path={"/*"} isAuthenticated={isAuthenticated} onLogout={onLogout}/>
            <PrivateRoute component={Admin} path="/admin" isAuthenticated={isAuthenticated} onLogout={onLogout}/>
            <Login path={"/login"} onLogout={onLogout} onLogin={onLogin} isAuthenticated={isAuthenticated}/>
        </Router>

    )


};

export default Routers;