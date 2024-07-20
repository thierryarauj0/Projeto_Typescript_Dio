import { login } from "./login"


// jest.mock('react', () => ({
//     ...jest.requireActual('react'), 
//     useContext: () => ({
//         setIsLoggedIn: mockSetIsLoggedIn
//     })
// }))

// jest.mock('react-router-dom', () => ({
//     ...jest.requireActual('react-router-dom'), 
//     useNavigate: () => mockNavigate
// }))


describe('login', () => {

    const mockEmail = 'thi@dio.com'


    it('Deve exibir um alert com boas vindas caso o email seja valido', async () => {
       const response = await login(mockEmail)
       expect(response).toBeTruthy()
       
    })

   

    it('deve exibir um erro caso o email seja invalido' , async() => {
        const response = await login('email@invalido.com')
        expect(response).toBeFalsy()
    })
})