export class LoginPage {
  getUserName() {
    return cy.get('#username');
  }

  getPassword() {
    return cy.get('#password');
  }

  getSignInBtn() {
    return cy.get('[data-test="signin-submit"');
  }

  loginUser(username: string, password: string) {
    this.getUserName().type(username);
    this.getPassword().type(password);
    this.getSignInBtn().click();
  }
}
