/// <reference types="cypress" />

describe ('Menu 4all Tests' , () => {

    it('Validar acesso a pagina' , () => {

        cy.visit("http://4alltests.com.br")
    })
    it('Validar acesso a pagina Ferramentas ' , () => {

        cy.visit("http://4alltests.com.br")
        cy.get("cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1)')").click

    })



})