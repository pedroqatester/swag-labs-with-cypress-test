describe('add and remove itens from cart', () => {
    it('add item to the cart', () => {
        cy.login()
    // add item
        cy.get('#add-to-cart-sauce-labs-backpack').click()
    // verify cart
        cy.get('[data-test="shopping-cart-link"]').should('contain', 1).click()
    // remove item
        cy.get('#remove-sauce-labs-backpack').click()
        cy.get('[data-test="inventory-item-name"]').should('not.exist')
    })
})