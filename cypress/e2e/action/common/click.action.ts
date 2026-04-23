export class ClickAction {
    
    static clickElement(element: string) {
        cy.get(element).click()
    }

    static clickElementByText(element: string, text: string) {
        cy.get(element).contains(text).click()
    }

    static clickElementByEq(element: JQuery, eq: number) {
        cy.wrap(element).eq(eq).click()
    }

}