export abstract class BasePage {
  abstract readonly url: string

  visit(): this {
    cy.visit(this.url)
    return this
  }
}
