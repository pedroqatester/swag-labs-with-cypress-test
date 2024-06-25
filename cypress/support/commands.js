Cypress.Commands.add('login', (
username = Cypress.env('user_name'),
password = Cypress.env('user_password')
) => {

    cy.visit('/')

    cy.get('[data-test="username"]').type(username)
    cy.get('#password').type(password)

    cy.get('#login-button').click()
})

Cypress.Commands.add('searchProductAndAdd', () => {
    cy.login()

    // verify home page
    cy.get('[data-test="title"]').should('be.visible')
    // selecting for filter
    cy.get('[data-test="product-sort-container"]')
    .select(2)
    // verifiy low price
    cy.get('[data-test="item-2-title-link"] > [data-test="inventory-item-name"]')
    .contains('Sauce Labs Onesie')
    // click to product and informations
    .click()
    cy.get('[data-test="inventory-item-desc"]')
    .should('be.visible')
    // add product to cart
    cy.get('[data-test="add-to-cart"]').click()
    // verify product on cart
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="title"]').should('be.visible')
    // verify quanties
    cy.get('[data-test="item-quantity"]')
    .should('contain', 1)
    // verify price
    cy.get('[data-test="inventory-item-price"]')
    .should('contain', 7.99)
    })
