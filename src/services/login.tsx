import { api } from "../api";

// services/login.js
export const login =  async (email: string): Promise<boolean> => {
   const data: any = await api

if( email !== data.email){
    return false
}
    return true
};
