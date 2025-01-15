class PackagePage {
    selectSecondPackage() {
      cy.get('.package-list-wrapper .package-list div:nth-child(2) a:nth-child(1)').click({ force: true });
    }
  
    verifyPackageDetails(expectedDetails) {
        cy.get("div[data-testid='package-detail']", { timeout: 20000 })
        .scrollIntoView()
         .within(() => {
          cy.contains('Moshi Moshi').should('be.visible');
          cy.get('[data-testid="COVERAGE-value"]')
            .invoke('text') // Extracts the text content
            .then((text) => {
              expect(text.trim()).to.equal('Japan'); // Removes the extra spaces and checks the text
              cy.get('[data-testid="DATA-value"]')
                .invoke('text')
                .then((text) => {
                  expect(text.trim()).to.equal('1 GB');
                  cy.get('[data-testid="VALIDITY-value"]')
                    .invoke('text')
                    .then((text) => {
                      expect(text.trim()).to.equal('7 Days');
                    });
                  cy.get('[data-testid="PRICE-value"]')
                    .invoke('text')
                    .then((text) => {
                      expect(text.trim()).to.equal('$4.50 USD');
                    });
                });
            });
  
        }); 
    }
  }
  
  export const packagePage = new PackagePage();
  