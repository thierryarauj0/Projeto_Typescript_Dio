// services/login.js
import { api } from "../api";

export const login = async (email: string, password: string): Promise<boolean> => {
    const data: any = await api;

    // Verifica se tanto o email quanto a senha correspondem
    if (email === data.email && password === data.password) {
        return true;
    }

    return false;
};
