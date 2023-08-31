import Page from "./page.js"
import { config } from "../../wdio.conf.js"

class LoginPage extends Page {
    get usernameInput() {
        return $("input[type='email']");
    }

    get passwordInput() {
        return $("input[type='password']");
    }

    get btnSubmit() {
        return $(".mfp-content button[type='submit']");
    }
    async openLofinPage() {
        await super.open("https://auto.am/")
        await $('.truncate').click();
        await $(".menu .bold[href='/login']").click();
    }
    async login(username, password) {
        await this.usernameInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.btnSubmit.click();
    }
}

export default new LoginPage();