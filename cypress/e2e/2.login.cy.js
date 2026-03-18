import users from '../fixtures/users.json'


describe('Login',() => {

    it('Deve logar com sucesso - perfil usuario', () => {
        cy.start()
        cy.login(users.user_maria.email, users.user_maria.password)

        cy.contains('Serverest Store',{timeout:10000})
    })

    it('Deve logar com sucesso - perfil administrador', () => {
        cy.start()
        cy.login(users.user_lia_admin.email, users.user_lia_admin.password)

        cy.contains('Este é seu sistema para administrar seu ecommerce.',{timeout:10000})
    })

    it('Validar que não é possível logar sem os dados adicionados', () => {
        cy.start()
        cy.login(' ', ' ', false)

        cy.contains('Email é obrigatório',{timeout:10000})
        cy.contains('Password é obrigatório',{timeout:10000})
    })

})