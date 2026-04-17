import users from '../fixtures/users.json'

describe ('Cadastrar Login', () => {

    it('Validar que o cadastro é realizado ao ter valores corretos', ()=>{
        cy.start()

        cy.get('[data-testid="cadastrar"]')
            .should('be.visible')
            .click()

        cy.submitUserRegistration(users.user_maria.name, users.user_maria.email,users.user_maria.password)    
        
        cy.get('h1',{timeout: 10000})
            .should('be.visible')
            .and('have.text','Serverest Store')


    })

    it('Validar que o cadastro de administrador é realizado ao ter valores corretos', ()=>{
        cy.start()

        cy.get('[data-testid="cadastrar"]')
            .should('be.visible')
            .click()

        cy.get('input[name="administrador"]')
            .should('be.visible')
            .check()

        cy.submitUserRegistration(users.user_lia_admin.name, users.user_lia_admin.email,users.user_lia_admin.password)    
        
        cy.get('h1', {timeout: 10000})
            .should('be.visible')
            .and('have.text','Bem Vindo  ' + users.user_lia_admin.name)

    })

    it('Validar que o cadastro não é realizado ao não adicionar valor no campo Email', ()=>{
        cy.start()

        cy.get('[data-testid="cadastrar"]')
            .should('be.visible')
            .click()

        cy.submitUserRegistration(users.user_joao.name, ' ', users.user_joao.password)    
        
        cy.contains('Email é obrigatório').should('be.visible')
        //cy.contains('Email é obrigatório').should('be.visible')

    })
})