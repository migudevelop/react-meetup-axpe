/* eslint-disable */
/// <reference types="cypress" />

describe('Check Favorites Page Papge', () => {
  beforeEach(() => {
    cy.visit('/favorites')
  })

  it('displays All Meetups page', () => {
    cy.get('main > section > h1').first().should('have.text', 'Favorites Page')
  })
})
