
describe('Testing Frames', () => {
  it('should test Single Frame', () => {
    cy.visit('https://demoqa.com/frames');
    cy.get('#frame1').should('exist').iframe().within(() => {
      cy.get('body').should('exist').type('Testing Single Frame');
    });
    cy.get('body').type('{esc}');
  });
  it('should test Nested Frame', () => {
    cy.visit('https://demoqa.com/frames');
    cy.get('#frame2').should('exist').iframe().within(() => {
      cy.get('iframe').should('exist').iframe().within(() => {
        cy.get('#sampleHeading').should('have.text', 'This is a sample page');
        cy.get('body').should('exist').type('Testing Nested Frame');
      });
    });
    cy.get('body').type('{esc}');
  });
});
