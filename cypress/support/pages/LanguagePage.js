class LanguagePage {
    changeLanguageToEnglish() {
      cy.get("[data-testid='Deutsch-header-language']").click();
      cy.get("[data-testid='English-language']").scrollIntoView().should('be.visible').click();
    }
  }
  
  export const languagePage = new LanguagePage();
  