// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('p', 'Home Page for my Blog - Articles Written by Osama Balkasem')
  })


  it('display all posts', () => {
    cy.visit('/posts')
    cy.contains('div','Social Impact');
  })

  // create post

  // login / logout

})
