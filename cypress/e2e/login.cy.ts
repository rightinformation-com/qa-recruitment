import { LoginPage } from '../pages/LoginPage'
import users from '../fixtures/users.json'

describe('Login', () => {
  let loginPage: LoginPage

  beforeEach(() => {
    loginPage = new LoginPage()
    loginPage.visit()
    loginPage.acceptCookies()
  })

  it('should login with valid credentials', () => {
    const homePage = loginPage.loginAs(users.validUser.email, users.validUser.password)

    homePage.assertUserIsLoggedIn()
    homePage.assertProductsVisible()
  })

  it('should not login with invalid credentials', () => {
    loginPage
      .typeEmail(users.invalidUser.email)
      .typePassword(users.invalidUser.password)
      .submitExpectingError()

    cy.url().should('include', '/login')
  })
})
