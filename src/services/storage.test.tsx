import { changeLocalStorage, createLocalStorage, getAllLocalStorage } from "./storage"

const dioBank = {
    login: false
}    

describe('storage', () => {
    const MockgetItem = jest.spyOn(Storage.prototype, 'getItem')
    const mockSetItem = jest.spyOn(Storage.prototype, 'setItem')
    
    it('Deve retornar o objeto no localStorage com a chave diobank', () => {
        getAllLocalStorage()
        expect(MockgetItem).toHaveBeenCalledWith('diobank')
    })   
    
    it('Deve criar o objeto no localStorag', () => {
        createLocalStorage()
        expect(mockSetItem).toHaveBeenCalledWith('diobank', JSON.stringify(dioBank))
    })

    it('deve alterar o valor do objeto no localStorage', () => {
        changeLocalStorage(dioBank)
        expect(mockSetItem).toHaveBeenCalledWith('diobank', JSON.stringify(dioBank))
    })
})