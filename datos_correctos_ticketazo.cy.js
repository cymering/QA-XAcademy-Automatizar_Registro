describe('Direccion a UI', ()=> {
it('Direccion de UI', ()=> {
cy.visit('https://ticketazo.com.ar/auth/registerUser')

cy.get('[data-cy="input-nombres"]').type('nombre')
cy.get('[data-cy="input-apellido"]').type('apellido')
cy.get('[data-cy="input-telefono"]').type('3515555555')
cy.get('[data-cy="input-dni"]').type('55000000')
cy.get('[data-cy="input-fecha-nacimiento"]').type('01012005')
cy.get('[data-cy="select-provincia"]').type('Córdoba')
cy.contains('li','Córdoba').click()
cy.get('[data-cy="select-localidad"]').type('Córdoba')  
cy.contains('li','Córdoba').click()
cy.get('[data-cy="input-email"]').type('nombre@gmail.com')
cy.get('[data-cy="input-confirmar-email"]').type('nombre@gmail.com')
cy.get('[data-cy="input-password"]').type('Pp-12345')
cy.get('[data-cy="input-repetir-password"]').type('Pp-12345')

cy.get('[data-cy="btn-registrarse"]').click()


})
})