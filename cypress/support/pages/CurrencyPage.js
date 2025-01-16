class CurrencyPage {
    openCurrencySelector() {
      cy.get("span[data-testid='€ EUR-header-language']").click();
    }
  
    selectUSD() {
      cy.get('a[data-testid="USD-currency-select"]').should('be.visible').click();
    }
  
    updateCurrency() {
      cy.get('button[data-testid="UPDATE-button"]').should('be.visible').click();
    }
  }
  
  export const currencyPage = new CurrencyPage();
  