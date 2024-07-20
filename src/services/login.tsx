/* eslint-disable react-hooks/rules-of-hooks */
import { useContext } from "react";
import { api } from "../api";
import { AppContext } from "../components/AppContext";
import { useNavigate } from "react-router-dom";

// services/login.js
export const login =  async (email: string): Promise<void> => {
   const {setIsLoggedIn} = useContext(AppContext)
   const navigate = useNavigate()
   console.log(setIsLoggedIn) 
   const data: any = await api

if( email !== data.email){
    return alert ('Email invalido')
}
    setIsLoggedIn(true)
    navigate(`/${data.id}`)
    alert(`Bem vindo(a) ${email}!`);
};
