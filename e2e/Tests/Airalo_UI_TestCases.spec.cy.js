import { homePage } from '../Support/Pages/HomePage';
import { languagePage } from '../Support/Pages/LanguagePage';
import { currencyPage } from '../Support/Pages/CurrencyPage';
import { packagePage } from '../Support/Pages/PackagePage';

describe('Airalo UI Automation Test', () => {
  it('Should automate the Airalo website functionalities', () => {
    // Step 1: Visit the website
    homePage.visit();
    cy.wait(2000); // Wait for the page to load

    // Step 2: Accept cookies
    homePage.acceptCookies();
    cy.wait(2000); // Wait for pop-up dismissal

    // Step 3: Validate the page title
    homePage.validateTitle();

    // Step 4: Change the language to English
    languagePage.changeLanguageToEnglish();
    cy.wait(2000);

    // Step 5: Change the currency to USD
    currencyPage.openCurrencySelector();
    cy.wait(2000);
    currencyPage.selectUSD();
    cy.wait(2000);
    currencyPage.updateCurrency();
    cy.wait(2000);

    // Step 6: Search for Japan
    homePage.searchForCountry('Japan');
    cy.wait(2000);


    // Step 7: Select the second eSIM package
    packagePage.selectSecondPackage();

    // Step 8: Verify package details
    packagePage.verifyPackageDetails({
      coverage: 'Japan',
      data: '1 GB',
      validity: '7 Days',
      price: '$4.50 USD',
    });
  });
});
