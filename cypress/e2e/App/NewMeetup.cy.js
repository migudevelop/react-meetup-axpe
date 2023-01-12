/* eslint-disable */
/// <reference types="cypress" />

describe('Check New Meetup Papge', () => {
  beforeEach(() => {
    cy.visit('/new-meetup')
  })

  it('Fill form fields in this page and click button', () => {
    cy.get('main > section > h1').first().should('have.text', 'Add New Meetup')
    cy.get('#title').type('test title')
    cy.get('#image').type('test image')
    cy.get('#address').type('test address')
    cy.get('#description').type('test description')
    cy.get('button').first().should('have.text', 'Add Meetup').click()
    cy.wait(500)
    cy.get('#image').clear()
    cy.get('#image').type('http://testimage.com')
    cy.get('button').first().should('have.text', 'Add Meetup').click()
  })
})
