class HomePage {
    visit() {
      cy.visit('https://www.airalo.com');
    }
  
    acceptCookies() {
      cy.get('#onetrust-accept-btn-handler', { timeout: 10000 }).should('be.visible').click();
    }
  
    validateTitle() {
      cy.title().should('include', 'Airalo');
    }
  
    searchForCountry(countryName) {
      cy.get("[data-testid='search-input']").should('be.visible').type(countryName);
      cy.get(`[data-testid='${countryName}-name']`).should('contain', countryName).click();
    }
  }
  
  export const homePage = new HomePage();
  