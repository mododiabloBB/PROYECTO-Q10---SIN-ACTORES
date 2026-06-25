export class TextQuestion {

    static takeText(element: string | JQuery<HTMLElement>): string {
        if (typeof element === 'string') {
            return Cypress.$(element).text().trim();
        }
        return element.text().trim();
    }

    static takeValueInput (element: string): Cypress.Chainable<string> {
        return cy.get(element).invoke('val').then(value => String(value).trim())
    }
}