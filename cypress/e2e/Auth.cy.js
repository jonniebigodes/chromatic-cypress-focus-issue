describe('Authentication', () => {
    it('Should be able to fill the form and focus the button using JS focused', {
        env: {
          disableAutoSnapshot: true,
        },
      }, () => {
      cy.visit('/login')
      cy.takeSnapshot('Cypress - JS Focus state - Initial state of the login page')
      cy.screenshot('Cypress - JS Focus state - Initial state of the login page')
  
      cy.get('input[name="email"]').type('test@email.com')
      cy.get('input[name="password"]').type('KC@2N6^?vsV+)w1t')

      cy.get('button[type="submit"]').focus()
      cy.takeSnapshot('Cypress - JS Focus state - Button Focused')
      cy.screenshot('Cypress - JS Focus state - Button Focused')
  
     /*  cy.focused().should('have.attr', 'type', 'submit') */
     cy.get('button[type="submit"]').should('have.focus')
    })
  })
  