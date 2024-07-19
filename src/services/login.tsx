import { api } from "../api";

// services/login.js
export const login =  async (email: string): Promise<void> => {
    const data: any = await api

if( email !== data.email){
    return alert ('Email invalido')
}

    alert(`Bem vindo(a) ${email}!`);
};
