class LanguagePage {
    changeLanguageToEnglish() {
      cy.get("span[data-testid='Deutsch-header-language']").click();
      cy.get('a[data-testid="English-language"]').should('be.visible').click();
    }
  }
  
  export const languagePage = new LanguagePage();
  