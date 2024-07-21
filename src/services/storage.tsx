const dioBank = {
    login: false
}    

export const getAllLocalStorage = () => {
    return localStorage.getItem('')

}

export const createLocalStorage = (): void => {
    localStorage.setItem('diobank', JSON.stringify(dioBank))
}