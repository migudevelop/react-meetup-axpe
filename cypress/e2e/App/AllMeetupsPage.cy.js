/* eslint-disable */
/// <reference types="cypress" />

describe('Check All Meetups Papge', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('displays All Meetups page', () => {
    cy.get('main > section > h1').first().should('have.text', 'All Meetups')
    cy.get('button').should('have.length', 3)
  })
})
