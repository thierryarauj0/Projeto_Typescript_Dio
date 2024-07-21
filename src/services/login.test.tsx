import { login } from "./login"

describe('login', () => {
    const mockEmail = 'thi@dio.com';
    const mockPassword = '123';

    it('Deve exibir um alert com boas vindas caso o email e a senha sejam válidos', async () => {
        const response = await login(mockEmail, mockPassword);
        expect(response).toBeTruthy();
    });

    it('Deve exibir um erro caso o email ou a senha sejam inválidos', async () => {
        // Teste com email inválido e senha válida
        let response = await login('email@invalido.com', mockPassword);
        expect(response).toBeFalsy();

        // Teste com email válido e senha inválida
        response = await login(mockEmail, 'senhaErrada');
        expect(response).toBeFalsy();

        // Teste com ambos inválidos
        response = await login('email@invalido.com', 'senhaErrada');
        expect(response).toBeFalsy();
    });
});
