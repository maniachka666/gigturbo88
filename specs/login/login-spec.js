const homeUrl = 'https://beta.gigturbo.com';
const LoginPage = require('../../page_object/login/login-page')
const timeout = 60000;
const { expect } = require('chai');

describe('Interests', () => {
  afterEach(() => {
    // Deleting cookies after each session will allow us to have new session before next test starts
    browser.deleteCookies();
});
   it('Should have Animal Care and Animal training under interests test', () => {
     browser.url(homeUrl);
    // Press Get Started button
     LoginPage.getStartedButton.waitForClickable()
     LoginPage.getStartedButton.click()
    //Intup phone number and code for get started your page
     LoginPage.login();
     //Verify you are on the earn page
     LoginPage.earnButton.waitForDisplayed()
     // Press 'Earn' button
     LoginPage.earnButton.waitForClickable()
     LoginPage.earnButton.click()
     //Verify you are on the right page
     LoginPage.platformsButton.waitForDisplayed()
     //Press platforms button
     LoginPage.platformsButton.waitForClickable()
     LoginPage.platformsButton.click()
    //Click on Next button
     LoginPage.nextButton.waitForClickable()
     LoginPage.nextButton.click()
     //Verify you are on gig page
     LoginPage.gigPageVerify.waitForDisplayed()
     //Click on Next button
     LoginPage.nextButton2.waitForClickable()
     LoginPage.nextButton2.click()
     //Click on Skip For Now button
     LoginPage.skipForNowButton.waitForClickable()
     LoginPage.skipForNowButton.click()
     //Verify that we are on interests page
     LoginPage.animalCareButton.waitForDisplayed()
     //Verify that two elements are presented on the page
    const firstElementVerify = LoginPage.animalCareButton.getText()
    expect(firstElementVerify).to.contain('Animal Care');
    const secondElementVerify = LoginPage.animalTrainingButton.getText()
    expect(secondElementVerify).to.contain('Animal Training');
    
   })
})
