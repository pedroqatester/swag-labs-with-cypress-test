describe('checkout', () => {
    it('sucessfully in checkout', () => {
        cy.searchProductAndAdd()
        
        cy.get('#checkout').click()
    // verify checkout page
    cy.get('[data-test="title"]').should('contain', 'Checkout: Your Information')
    // written firts name, last name and zip code
    cy.get('#first-name').type('Pedro')
    cy.get('#last-name').type('Pereira')
    cy.get('#postal-code').type(11725020)
    // next step in checkout
    cy.get('[data-test="continue"]').click()
    // finish checkout
    cy.get('[data-test="finish"]').click()
    // confirm checkout
    cy.contains('Thank you for your order!')
    .should('be.visible')

    cy.url().should('contain', '/checkout-complete.html')

    })
})