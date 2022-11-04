describe('Basic test for NZME', () => {
  it('Navigate to NZME homepage and confirm elements are as expected', () => {
    cy.visit('https://www.nzme.co.nz')
    cy.url().should("contain", "https://www.nzme.co.nz");
  })
})