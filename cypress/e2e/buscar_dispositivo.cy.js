/// <reference types="cypress"/> 

describe('Buscar dispositivos',()=> {

    it('Buscar dispositivo Especifico', ()=> {
        cy.request({
            method: 'GET',
            url: 'https://api.restful-api.dev/objects/12'
        }).then((result) => {
            expect(result.status).to.eql(200)
            expect(result.body.id).to.eql('12')
            expect(result.body.name).to.eql('Apple iPad Air')
        })



    })

})