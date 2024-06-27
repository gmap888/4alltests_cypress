/// <reference types="cypress" />

describe('API Test', () => {




    it ('Validar body retornando lIST USERS', () => {

})


    it('GET', () => {
       cy.request({
          method: 'GET',
          url: 'https://reqres.in/api/users?page=2'
       }).then((response) => {
        let retorno = response.body
        cy.log(JSON.stringify(retorno, null, 2))


        
       });
    });
    
    it ('Validar body retornando Single USERS', () => {

    })
    
    
        it('GET', () => {
           cy.request({
              method: 'GET',
              url: 'https://reqres.in/api/users/2'
           }).then((response) => {
            let retorno = response.body
            cy.log(JSON.stringify(retorno, null, 2))
    
    
            
           });
        });
        it ('Validar body retornando Single USERS', () => {

        })
        
        
            it('GET', () => {
               cy.request({
                  method: 'GET',
                  url: 'https://reqres.in/api/users/2'
               }).then((response) => {
                let retorno = response.body
                cy.log(JSON.stringify(retorno, null, 2))
        
        
                
               });
            });
 });
 
     