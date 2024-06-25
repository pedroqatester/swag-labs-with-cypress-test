/// <reference types="cypress" />

describe('Login page', () => {
  it('fazendo login na aplicação', () => {
    cy.visit('/')

    cy.get('[data-test="username"]').type('standard_user')
    cy.get('#password').type('secret_sauce')

    cy.get('#login-button').click()
  })
})