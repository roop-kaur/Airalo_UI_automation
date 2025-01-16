import { homePage } from '../../support/pages/HomePage';
import { languagePage } from '../../support/pages/LanguagePage';
import { currencyPage } from '../../support/pages/CurrencyPage';
import { packagePage } from '../../support/pages/PackagePage';

describe('Airalo UI Automation Test', () => {
  it('Should automate the Airalo website functionalities', () => {
    // Step 1: Visit the website
    homePage.visit();

    // Step 2: Accept cookies
    homePage.acceptCookies();
    cy.wait(2000); // Wait for pop-up dismissal

    // Step 3: Validate the page title
    homePage.validateTitle();

    // Step 4: Change the language to English
    languagePage.changeLanguageToEnglish();
    
    // Step 5: Change the currency to USD
    currencyPage.openCurrencySelector();
    currencyPage.selectUSD();
    currencyPage.updateCurrency();

    // Step 6: Search for Japan
    homePage.searchForCountry('Japan');

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
