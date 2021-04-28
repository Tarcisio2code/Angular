Cypress.Commands.add('login', (username, password) => {
    cy.visit('/login')
    cy.url().should('include','/ login')
    cy.get('[formcontrolname=email]').type(username)
    cy.get('[formcontrolname=password]').type(password)
    cy.get('.btn').click()
})
Cypress.Commands.add('loadUsers', () => {
    cy.fixture('users').as('users')
})
