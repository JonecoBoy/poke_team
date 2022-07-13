import React, {useEffect, useState} from "react"
import {navigate, Redirect, Router} from "@reach/router"
import {Container, Form, FormGroup, Label, Input, Button, Col} from "reactstrap"
import styled from "styled-components"
import squirtle from "../assets/squirtle_sunglasses.png"
import {useFormik} from "formik";


const Login = ({isAuthenticated,onLogin,onLogout}) => {

    useEffect(()=>{
        (async ()=> {
            // const auth = getAuth(firebase);
            // console.log(await getAuth(firebase).verifyIdToken(process.env["REACT_APP_USER_TOKEN "]))
            const {REACT_APP_USER_TOKEN:token} = process.env
            if(!isAuthenticated.status){
                console.log("Not Authorized")

            }else{
                navigate('/admin');
            }

        })();
    },)

    const handleLogin = (email,password)=>{
        onLogin(email,password);
    }
    const formik = useFormik({
        initialValues: {
            email: "admin@admin.com",
            password: "password",
        },
        onSubmit: async (values, {setErrors}) => {
            if(!(values.email.length > 3)){
                alert('The Email address should have 4 characters or more!')
            }
            else{
                handleLogin(values.email,values.password)
            }
        },

    })

    const enableSubmitButton = ()=>{
        if(
            !(
            (formik.getFieldProps('password').value.length > 3)
            &&
            (formik.getFieldProps('email').value.length > 5)
            )
        ){
            return (true)
        }
        else return (false)

    }


    return (
        <LoginContainer>
            <Col sm={12} md={6} lg={5} >

                <div className='bannerImage'><BannerImage src={squirtle}/></div>
                <Form inline onSubmit={formik.handleSubmit}>
                <FormGroup className="my-3 mx-3" >
                    <Label
                        className="me-sm-2 my-3"
                        for="exampleEmail"
                    >
                        Email
                    </Label>
                    <Input
                        {...formik.getFieldProps('email')}
                        id="exampleEmail"
                        name="email"
                        placeholder="something@idk.cool"
                        type="email"

                    />
                </FormGroup>
                <FormGroup className="my-3 mx-3">
                    <Label
                        className="me-sm-2"
                        for="examplePassword"
                    >
                        Password
                    </Label>
                    <Input
                        {...formik.getFieldProps('password')}
                        id="examplePassword"
                        name="password"
                        placeholder="don't tell!"
                        type="password"


                    />
                </FormGroup>
                <Button type={"submit"}
                        disabled={enableSubmitButton()}
                >
                    Submit
                </Button>
            </Form>
        </Col>
        </LoginContainer>
    )
}

export default Login

const LoginContainer = styled(Container)`
display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  
  Button{
    width: 90%;
  }
  Form{
    background-color: whitesmoke;
    border-radius: 10px;
    

  }
  .bannerImage{
    text-align: center;
  }
  Button{
    margin:20px;
  }
  
`
const BannerImage = styled.img`
  max-width: 100%;
  max-height: 20vh;
  
`;