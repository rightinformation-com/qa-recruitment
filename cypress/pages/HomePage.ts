import { BasePage } from './BasePage'

export class HomePage extends BasePage {
  readonly url = '/'

  assertUserIsLoggedIn(): this {
    cy.url().should('not.include', '/login')
    cy.get('img[alt="user-logged-in"]').should('be.visible')
    return this
  }

  assertProductsVisible(): this {
    cy.contains('Produkty').should('be.visible')
    return this
  }
}
