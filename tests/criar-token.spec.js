const {test, expect} = require('@playwright/test');


var tokenRecebido

test('Atualização parcial', async ({ request }) => {
    const response = await request.post('/auth', {
        data: {
            "username": "admin",
            "password": "password123"        
        }
    })

    console.log(await response.json())
    const responseBody = await response.json()

    tokenRecebido = responseBody.token

    console.log('seu token é:' + tokenRecebido)

    const partialUpdateRequest = await request.patch('/booking/2156', {
        headers: {
            'Content-Type': 'aplication/json',
            'Accept': 'aplication/json',
            'Cookie': `token=${tokenRecebido}`
        },
        data: {
            "firsname": "Teste",
            "lastname": "teste",
            "totalprice": 111,
            "depositpaid": true
        }

    })

})