import { api } from "../api";

// services/login.js
export const login = async (email: string, password: string): Promise<boolean> => {
    const data: any = await api; 

    if (email === data.email && password === data.password) {
        localStorage.setItem('user', JSON.stringify({ email, isLoggedIn: true }));
        return true;
    }

    return false;
};
