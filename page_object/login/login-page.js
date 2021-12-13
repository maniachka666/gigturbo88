"use strict";

class Login {
    // Reusable selector getters that will help us to avoid selector duplicates
    get buttonLogInHomePage() { return $('[href="/login"]'); }
    get buttonSignUpLog() { return $('[class="Button_button__sL3tD Button_signupButton__pGlka undefined"]'); }
    get placeholderPhoneNumber() { return $('[type="tel"]'); }
    get placeholderVerifyCode() { return $('[class="d-flex justify-content-center position-relative"] input'); }
    get dashboardMenuItems() { return $('[class="SideMenu_mainContainer__2VXYN sticky-top"]'); }
    get inputErrorLogin() { return $('[class*="Input_error"]'); }
    get iconUserMenu() { return $('[class="TopMenu_noImage__1RMpC"]'); }
    get logoutSection() { return $('[class="far fa-sign-out-alt"]'); }
    get homePage() { return $('[alt="graph"]'); }
    get getStartedButton() { return $('[href="/signup"]'); }
    get earnButton() { return $('p=Earn');}
    get platformsButton() { return $('h3=I do task-oriented work on platforms like:'); }
    get nextButton() { return $('[class="Button_button__sL3tD Button_platformButton__3vmT4 undefined"]'); }   
    get nextButton2() { return $('[type="button"]')}
    get skipForNowButton() { return $('p=Skip for now');}
    get interestsPageVerify() { return $('h1=What are you interested in?');}
    get animalCareButton() { return $('span=Animal Care')}
    get animalTrainingButton() { return $('span=Animal Training')}
    get gigPageVerify() { return $('[class="row InfoScreenOne_headerContainer__1luD_"]')}
    // Helper method to avoid code duplication
    // Login to Homepage Gigturbo

    
    login(phone = '3473236255', pin = '000000') {
        // Wait for load get started page
        this.placeholderPhoneNumber.waitForClickable();
        // Type phone number in placeholder
        this.placeholderPhoneNumber.click();
        this.placeholderPhoneNumber.setValue(phone);
        // Click on the button placeholder
        this.buttonSignUpLog.click();
        // Input the 6-digit code which you received by sms
        this.placeholderVerifyCode.setValue(pin);
    }
}
module.exports = new Login();
