describe('Post', () => {
    beforeEach(() => {
    cy.login('testecypress@testecypress.com', 'testecypress')
    })
    it('Novo', ()  => {
        const title = 'Cypress Hill E2E'
        cy.contains('New Article').click()
        cy.location('pathname').should('equal', '/editor')
        cy.get('[formcontrolname=title]').type(title)
        cy.get('[formcontrolname=description]').type('Ponta a Ponta')
        cy.get('[formcontrolname=body]').type('Agilidade, Qualidade')
        cy.contains('Publish Article').click()
        cy.get('hl').contains(title)
    })
    it('Editar', ()  => {
        cy.contains('testecypress').click()
        cy.location('pathname').should('contains', '/profile')
        cy.get('.article—preview').get('h1').first().click()
        cy.contains('Edit Article').click()
        cy.get('[formcontrolname=body]').clear()
        cy.get('[formcontrolname=body]').type('Economia')
        cy.contains('Publish Article').click()
        cy.contains('Economia')
    })
})