// https://docs.cypress.io/api/introduction/api.html

describe('All Tests:', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('p', 'Home Page for my Blog - Articles Written by Osama Balkasem')
  })

  let user = {
    name: 'Jill Harvard',
    email: 'jill@harvard.edu',
    password: 'asdfasdf'
}

it('lets a user log in and is welcomed', () => {
  cy.visit('/account');
  cy.get('[data-test=email-input]').clear().type(user.email);
  cy.get('[data-test=password-input]').clear().type(user.password);
  cy.get('[data-test=login-button]').click();
  cy.contains('[data-test="welcome-message"]', user.name);

  cy.contains('[data-test="welcome-message"]', user.name);
})

  it('display all posts', () => {
    cy.get('[data-test="Posts-link"]').click();
    cy.contains('div','All Posts');
  })

  // create post, failed test:
  it('try to create new post, access denied', () => {
    cy.visit('/posts/new');
    cy.contains('h1', 'Access Denied')
  })

  // login 
  it('test if the user can log in', () => {
    cy.visit('/account');
    cy.get('[data-test=email-input]').clear().type(user.email);
    cy.get('[data-test=password-input]').clear().type(user.password);
    cy.get('[data-test=login-button]').click();
    cy.contains('[data-test="welcome-message"]', user.name);
  
    // We know logout works if we see the login button again
    cy.get('[data-test="logout-button"]').should('exist');
  })
})
