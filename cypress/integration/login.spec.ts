import { LoginPage } from '../page-object/LoginPage';

const loginPage = new LoginPage();

describe('Login tests', () => {
  it('logs in a user with valid credentials', () => {
    cy.visit('/');
    cy.fixture('login').then((user) => {
      loginPage.loginUser(user.username, user.password);
    });
    cy.get('[data-test="sidenav-toggle"').should('be.visible');
  });
});
