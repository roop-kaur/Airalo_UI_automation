class CurrencyPage {
    openCurrencySelector() {
      cy.get("[data-testid='€ EUR-header-language']").click();
    }
  
    selectUSD() {
      cy.get("[data-testid='USD-currency-select']").should('be.visible').click();
    }
  
    updateCurrency() {
      cy.get("[data-testid='UPDATE-button']").should('be.visible').click();
    }
  }
  
  export const currencyPage = new CurrencyPage();
  