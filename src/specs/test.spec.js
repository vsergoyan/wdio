import { config } from "../../wdio.conf.js"
import { expect } from "chai";
import loginPage from "../pages/login.page.js";

describe('Login functionality', () => {
    it('should not login with invalid credentials', async () => {
        await loginPage.openLofinPage();
        await loginPage.login('wrong', 'wrong');
        const errMessage = await $("ul[class='alert  hiddendiv marg-all-0 alert-danger']").getText();
        const expectedErrMessage = "This data does not match any of our records";
        expect(expectedErrMessage).eql(errMessage);
    })
})