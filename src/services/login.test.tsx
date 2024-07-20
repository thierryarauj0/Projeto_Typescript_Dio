import { login } from "./login"

const mockSetIsLoggedIn = jest.fn()
const mockNavigate = jest.fn()

jest.mock('react', () => ({
    ...jest.requireActual('react'), 
    useContext: () => ({
        setIsLoggedIn: mockSetIsLoggedIn
    })
}))

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'), 
    useNavigate: () => mockNavigate
}))


describe('login', () => {

    const mockEmail = 'thi@dio.com'


    it('Deve exibir um alert com boas vindas caso o email seja valido', async () => {
       await  login(mockEmail)
       expect(mockSetIsLoggedIn).toHaveBeenCalledWith(true)
       expect(mockNavigate).toHaveBeenCalledWith('/1')
    })

   

    it('deve exibir um erro caso o email seja invalido' , async() => {
        await login('email@invalido.com')
       expect(mockSetIsLoggedIn).not.toHaveBeenCalledWith()
       expect(mockNavigate).not.toHaveBeenCalled()
    

    })
})