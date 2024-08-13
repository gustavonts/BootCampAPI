const {test, expect} = require('@playwright/test');

test('COnsultando as reservas cadastradas', async ({ request }) =>{
    const response = await request.get('/booking');
    console.log(await response.json())

    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);

});

const teste = 2665;

test('COnsultando as reservas cadastradas por id', async ({ request }) =>{
    const response = await request.get('/booking/2665');
    
    const jsonBody = await response.json();

    console.log(jsonBody)

    expect(jsonBody.firstname).toBe('Josh')
    expect(jsonBody.lastname).toBe('Smith')
    expect(jsonBody.totalprice).toBe(111)



});

