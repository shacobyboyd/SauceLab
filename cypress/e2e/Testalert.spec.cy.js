
describe('Testing Alerts', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/alerts');
  });
  it('should test the Alert', () => {
    cy.get('#alertButton').click();
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal('This is a single alert message.');
    });
  });
  it('should test the Timer Alert', () => {
    cy.get('#timerAlertButton').click();
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal('This is a JavaScript Alert!');
    });
  });
  it('should test the Confirm Alert', () => {
    cy.get('#confirmButton').click();

    cy.on('window:confirm', (confirmText) => {
      expect(confirmText).to.equal('This is a JavaScript Confirmation!');
      return true; 
    });
    cy.get('#confirmResult').should('have.text', 'You selected OK');
  });
});
