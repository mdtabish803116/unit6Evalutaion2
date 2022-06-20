import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import styled from "styled-components";

const StyledForm = styled.div`
   width : 50%;
   margin:auto;
   margin-top : 80px;

`
const StyledInput = styled.input`
        
  `
const handleSubmit = (e)=>{
  e.preventDefault();
}
const Login = () => {
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");

  return(
     <StyledForm>
              
              <StyledInput type = "email" placeholder="Email" 
             
             value = {email} onChange={(e)=>setEmail(e.target.value)}></StyledInput>
              <br/>
              <StyledInput type = "password"  placeholder="Password" 
              value = {password} onChange={(e)=>setPassword(e.target.value)}></StyledInput>
              <br/>
              <input type = "submit" value = "Login" onSubmit={handleSubmit}></input>
    </StyledForm>
    )
};

export default Login;
