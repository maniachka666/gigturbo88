const homeUrl = 'https://beta.gigturbo.com';
const InterestsPage = require('../../page_object/interests/interests-page')
const timeout = 60000;
const { expect } = require('chai');

describe('Interests', () => {
  afterEach(() => {
    // Deleting cookies after each session will allow us to have new session before next test starts
    browser.deleteCookies();
});
   it('Should have Animal Care and Animal training under interests', () => {
     browser.url(homeUrl);
    // Press Get Started button
     InterestsPage.getStartedButton.waitForClickable()
     InterestsPage.getStartedButton.click()
    //Intup phone number and code for get started your page
     InterestsPage.signup();
     //Verify you are on the earn page
     InterestsPage.earnButton.waitForDisplayed()
     // Press 'Earn' button
     InterestsPage.earnButton.waitForClickable()
     InterestsPage.earnButton.click()
     //Verify you are on the right page
     InterestsPage.platformsButton.waitForDisplayed()
     //Press platforms button
     InterestsPage.platformsButton.waitForClickable()
     InterestsPage.platformsButton.click()
    //Click on Next button
     InterestsPage.nextButton.waitForClickable()
     InterestsPage.nextButton.click()
     //Verify you are on gig page
     InterestsPage.gigPageVerify.waitForDisplayed()
     //Click on Next button
     InterestsPage.nextButton2.waitForClickable()
     InterestsPage.nextButton2.click()
     //Click on Skip For Now button
     InterestsPage.skipForNowButton.waitForClickable()
     InterestsPage.skipForNowButton.click()
     //Verify that we are on interests page
     InterestsPage.animalCareButton.waitForDisplayed()
     //Verify that two elements are presented on the page
    const firstElementVerify = InterestsPage.animalCareButton.getText()
    expect(firstElementVerify).to.contain('Animal Care');
    const secondElementVerify = InterestsPage.animalTrainingButton.getText()
    expect(secondElementVerify).to.contain('Animal Training');
    //need to delete account before using test case next time
    // //click Skip for now button
    //  InterestsPage.skipForNowButton.waitForClickable()
    //  InterestsPage.skipForNowButton.click()
    //  //click Skip for now button
    //  InterestsPage.skipForNowButton.waitForClickable()
    //  InterestsPage.skipForNowButton.click()
    //  //click Skip for now button
    //  InterestsPage.skipForNowButton.waitForClickable()
    //  InterestsPage.skipForNowButton.click()
    //  //click on set manualu button
    //  InterestsPage.setManualyButton.waitForClickable()
    //  InterestsPage.setManualyButton.click()
    //  //Click on Next button
    //  InterestsPage.nextButton.waitForClickable()
    //  InterestsPage.nextButton.click()
    //  //click Skip for now button
    //  InterestsPage.skipForNowButton.waitForClickable()
    //  InterestsPage.skipForNowButton.click()
    //  //verify we are on email page
    //  InterestsPage.emailPageVerify.waitForDisplayed()
    //  //click Skip for now button
    //  InterestsPage.skipForNowButton.waitForClickable()
    //  InterestsPage.skipForNowButton.click()
    //  //click on user icon
    //  InterestsPage.userIcon.waitForClickable()
    //  InterestsPage.userIcon.click()
    //  //delete account
    //  InterestsPage.deleteAccount.waitForClickable()
    //  InterestsPage.deleteAccount.click()
   })
})
