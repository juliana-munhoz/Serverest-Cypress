// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('start',() => {
    cy.visit('/')
})

Cypress.Commands.add('submitUserRegistration',(name,email,password) => {
    cy.get('[data-testid="nome"]')
        .should('be.visible')
        .type(name)
    cy.get('[data-testid="email"]')
        .should('be.visible')
        .type(email)
    cy.get('[data-testid="password"]')
        .should('be.visible')
        .type(password)

     cy.contains('button',"Cadastrar")
            .should('be.visible')
            .click()
})

Cypress.Commands.add('login', (email, password, addPassword = true) => {
    cy.get('[data-testid="email"]')
        .should('be.visible')
        .type(email)

    if (addPassword === true) {
        cy.get('#password')
        .should('be.visible')
        .type(password)
    }
    

    cy.contains('button','Entrar')
        .should('be.enabled')
        .click()

})

