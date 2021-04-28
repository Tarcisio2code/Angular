describe('Profile', () => {
    it('Editar Perfil', () => {
        cy.login('testecypress@testecypress.com', 'testecypress')
        cy.contains('testecypress').click()
        cy.contains('Edit Profile Settings').click()
        cy.get('[formcontrolname="imaqe"]').clear()
        cy.get('[formcontrolname="imaqe"]')
            .type('https://thispersondoesnotexist.com/image')
        cy.get('[formcontrolname="passsword"]').type('testecypress')
        cy.contains('Update Settings').click()
    })
})