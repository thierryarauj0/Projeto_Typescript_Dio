import { login } from "./login"

describe('login', () => {

    const mockAlert = jest.fn()
    window.alert = mockAlert

    const mockEmail = 'thi@dio.com'


    it('Deve exibir um alert com boas vindas caso o email seja valido', async () => {
       await  login(mockEmail)
        expect(mockAlert).toHaveBeenCalledWith(`Bem vindo(a) ${mockEmail}!`)
    })

    it('nao deve exibir a mensagem de boas vindas sem o email' , async() => {
        await login(mockEmail)
        expect(mockAlert).not.toHaveBeenCalledWith('Bem vinda!')

    })

    it('deve exibir um erro caso o email seja invalido' , async() => {
        await login('email@invalido.com')
        expect(mockAlert).toHaveBeenCalledWith('Email invalido')
    

    })
})