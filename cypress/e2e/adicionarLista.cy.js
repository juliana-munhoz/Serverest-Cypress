import users from '../fixtures/users.json'

describe('Lista de produtos', () => {

    it('Adicionar um produto a lista e validar', () => {

        cy.start()
        cy.login(users.user_maria.email,users.user_maria.password)

        cy.get('[data-testid="pesquisar"]')
            .should('be.visible')
            .clear()
            .type('Samsung 60 polegadas')

        cy.contains('button','Pesquisar')
            .should('be.enabled')
            .click()

        cy.contains('.card-body','Samsung 60 polegadas')
            .should('be.visible')
            .as('product')

        cy.get('@product')            
            .contains('button','Adicionar a lista')
            .should('be.enabled')
            .click()

        cy.contains('Lista de Compras')
            .should('be.visible')
        
        cy.contains('.card-body','Samsung 60 polegadas')
            .should('be.visible')
                   
    })
})