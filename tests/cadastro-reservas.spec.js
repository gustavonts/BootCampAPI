const {test, expect} = require('@playwright/test');

test('Cadastrando uma reserva', async ({ request }) =>{
    const response = await request.post('/booking', {
        data: {
            "firstname" : "Jim",
            "lastname" : "Brown",
            "totalprice" : 111,
            "depositpaid" : true,
            "bookingdates" : {
                "checkin" : "2018-01-01",
                "checkout" : "2019-01-01"
            },
            "additionalneeds" : "Breakfast"
        }
    })
    console.log(await response.json())

    const responseBody = await response.json();
    expect(responseBody.booking).toHaveProperty('firstname','Jim')
    expect(responseBody.booking).toHaveProperty('lastname','Brown')
    expect(responseBody.booking).toHaveProperty('totalprice', 111)
    expect(responseBody.booking).toHaveProperty('depositpaid', true)
})