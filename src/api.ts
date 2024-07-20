

const conta = {
    email : 'thi@dio.com',
    password:'123',
    name:'Thierry Araujo',
    balance: 2000.00,
    id:'1'
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)


})


