

const conta = {
    email : 'thi@dio.com',
    password:'123',
    name:'Thierry Araujo'
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)


})


