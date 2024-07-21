import { createLocalStorage, getAllLocalStorage } from "./storage"

const dioBank = {
    login: false
}    

describe('storage', () => {
    
    it('Deve retornar o objeto no localStorage com a chave diobank', () => {
        const MockgetItem = jest.spyOn(Storage.prototype, 'getItem')
        getAllLocalStorage()
        expect(MockgetItem).toHaveBeenCalledWith('diobank')
    })   
    
    it('Deve criar o objeto no localStorag', () => {
        const mockSetItem = jest.spyOn(Storage.prototype, 'setItem')
        createLocalStorage()
        expect(mockSetItem).toHaveBeenCalledWith('diobank', JSON.stringify(dioBank))
    })
})