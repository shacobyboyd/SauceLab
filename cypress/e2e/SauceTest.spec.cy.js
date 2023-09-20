const validUsername = 'standard_user';
const validPassword = 'secret_sauce';
const invalidUsername = 'invaliduser';
const invalidPassword = 'incorrectpass';

describe.only('Valid Login ', () => {
it('should allow a standard user log in', () => {
cy.visit('https://www.Saucedemo.com/')
  })
})
describe('Invalid Username ', () => {
it('should show an error message for invalid password', () => {
cy.visit('https://www.Saucedemo.com/')
  })
})
describe('Invalid Password ',() => {
it ('Should show message for invaild password',() => {
cy.visit('https://www.Saucedemo.com/')
})
  })
describe('Shopping Cart Functionality', () => {
it('should add multiple items to cart',() => {
cy.visit('https://www.Saucedemo.com/')
})
  })
describe('Logout', () => {
it('should allow user to log out', () => {
cy.visit('https://www.Saucedemo.com/')
})
  })




