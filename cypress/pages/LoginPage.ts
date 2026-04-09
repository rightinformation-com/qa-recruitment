import { BasePage } from './BasePage'
import { HomePage } from './HomePage'

export class LoginPage extends BasePage {
  readonly url = '/login'

  private get emailInput() {
    return cy.get('[data-cy="email-input"]')
  }

  private get passwordInput() {
    return cy.get('[data-cy="password-input"]')
  }

  private get submitButton() {
    return cy.get('[data-cy="log-in"]')
  }

  acceptCookies(): this {
    cy.wait(1000)
    cy.get('body').then(($body) => {
      if ($body.text().includes('Zaakceptuj wszystkie')) {
        cy.contains('Zaakceptuj wszystkie').click()
      }
    })
    return this
  }

  typeEmail(email: string): this {
    this.emailInput.type(email)
    return this
  }

  typePassword(password: string): this {
    this.passwordInput.type(password)
    return this
  }

  submit(): HomePage {
    this.submitButton.click()
    return new HomePage()
  }

  submitExpectingError(): this {
    this.submitButton.click()
    return this
  }

  loginAs(email: string, password: string): HomePage {
    this.typeEmail(email)
    this.typePassword(password)
    return this.submit()
  }
}
