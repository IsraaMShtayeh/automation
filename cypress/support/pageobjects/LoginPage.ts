
class LoginPage {
    elements = {
        //login
       // userName: () => cy.get('[placeholder="Username"]'),
        userName: () => cy.getByCy('Username'), // support/commands.ts
        password: () => cy.getByCy('Password'),
        loginBtn: () => cy.get('button'),
        headerTitle: () => cy.get('.oxd-topbar-header-title'),
        //forget password
        forgetBtn: () => cy.get('.orangehrm-login-forgot'),
        resetBtn: () => cy.get('[type="submit"]'),
        successReset: () => cy.get('.orangehrm-forgot-password-title')
    }

    login(userName: string, password: string) {
        this.elements.userName().type(userName);
        this.elements.password().type(password);
        this.elements.loginBtn().click();
        this.elements.headerTitle().should('contain', 'Dashboard');
    }

    forgetPassword(forgetUserName: string) {
        this.elements.forgetBtn().click();
        this.elements.userName().type(forgetUserName);
        this.elements.resetBtn().click();
        this.elements.successReset().should('contain', 'Reset Password link sent successfully')
    }

    searchUser(){

    }


}
export default LoginPage;

