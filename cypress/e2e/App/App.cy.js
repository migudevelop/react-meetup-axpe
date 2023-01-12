/* eslint-disable */
/// <reference types="cypress" />

describe('Check App funciontality', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Click link to visit the different pages', () => {
    cy.get('main > section > h1').first().should('have.text', 'All Meetups')
    cy.get('.nav-links').last().click()
    cy.get('main > section > h1').first().should('have.text', 'Favorites Page')
    cy.get('.nav-links').first().click()
    cy.get('main > section > h1').first().should('have.text', 'All Meetups')
    cy.get('.nav-links').eq(1).click()
    cy.get('main > section > h1').first().should('have.text', 'Add New Meetup')
  })

  it('Add favorite meetup and check this favorite display in favorites page', () => {
    cy.get('button').first().should('have.text', 'Add to favorites').click()
    cy.get('#badge').first().should('have.text', '1')
    cy.get('.nav-links').last().click()
    cy.get('button')
      .first()
      .should('have.text', 'Remove from favorites')
      .click()
    cy.get('#badge').first().should('have.text', '0')
  })

  it('Add and remove favorite meetup ', () => {
    cy.get('button').first().should('have.text', 'Add to favorites').click()
    cy.get('#badge').first().should('have.text', '1')
    cy.get('button')
      .first()
      .should('have.text', 'Remove from favorites')
      .click()
    cy.get('#badge').first().should('have.text', '0')
  })
})
