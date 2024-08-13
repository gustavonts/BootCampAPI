/// <reference types="cypress"/> 

describe('Cadastrar dispositivos',()=> {

    it('Cadastrar dispositivos com sucesso', ()=> {
        cy.request({
            method: 'POST',
            url: 'https://api.restful-api.dev/objects',
            body: {
                "name": "Computador Teste",
                "data": {
                    "year": 2000,
                    "price": 20,
                    "CPU model": "Intel Core I5",
                    "Hard disk size": "1 TB"
                }
            }
        }).then((result) => {
            expect(result.status).to.eql(200)
            expect(result.body.id).to.not.empty
            expect(result.body.name).to.eql('Computador Teste')
        })



    })

})