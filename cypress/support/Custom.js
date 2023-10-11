

// import './commands'; 

Cypress.Commands.add('login', (username, password) => {
  cy.visit('https://www.saucedemo.com/');
  cy.get('input[name="user-name"]').type(standard_user);
  cy.get('input[name="password"]').type(secret_sauce);
  cy.get('.btn_action').click();
});

Cypress.Commands.add('verifyCartItemCount', () => {
  cy.get('.shopping_cart_link').click();
  cy.get('.cart_item').should('have.length', 2);
});

