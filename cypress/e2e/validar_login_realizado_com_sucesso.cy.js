describe('Funcionalidade cadastro', () => {
  it('Validar cadastro realizado com sucesso', () => {


    //acessar a pagina
    cy.visit('http://aprendendotestar.com.br/treinar-automacao.php')
   
   // preencher os campos
    cy.get(':nth-child(2) > td > input').type('usuario')
    cy.get(':nth-child(4) > td > input').type('senha')
    cy.get(':nth-child(6) > td > input').type('nome')
   
   // clicar no botão enviar
    cy.get('td > .btn').click()
   
   // verificar se o cadastro foi realizado com sucesso
    cy.get('tbody > :nth-child(2) > :nth-child(2)').should('have.text', 'nome')
  })

  it('Validar apagar usuario', () => {

//acessar a pagina
cy.visit('http://aprendendotestar.com.br/treinar-automacao.php')

// verificar se o cadastro foi realizado com sucesso
cy.get('tbody > :nth-child(2) > :nth-child(2)').should('have.text', 'nome')

//apagar o usuario
cy.get(':nth-child(2) > :nth-child(5) > a').click()

//acessar novamente a pagina
cy.visit('http://aprendendotestar.com.br/treinar-automacao.php')

//verificar se existe o 'nome'
cy.get('tbody > :nth-child(2) > :nth-child(2)').should('not.have.text', 'nome')



  })

})