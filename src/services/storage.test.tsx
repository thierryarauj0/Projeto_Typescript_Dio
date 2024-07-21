import { createLocalStorage, getAllLocalStorage } from "./storage"

const dioBank = {
    login: false
}    

describe('storage', () => {
    
    it('Deve retornar o objeto no localStorag', () => {
        const getItem = jest.spyOn(Storage.prototype, 'getItem')
        getAllLocalStorage()
        expect(getItem).toHaveBeenCalled()
    })   
    
    it('Deve criar o objeto no localStorag', () => {
        const mockSetItem = jest.spyOn(Storage.prototype, 'setItem')
        createLocalStorage()
        expect(mockSetItem).toHaveBeenCalledWith('diobank', JSON.stringify(dioBank))
    })
})