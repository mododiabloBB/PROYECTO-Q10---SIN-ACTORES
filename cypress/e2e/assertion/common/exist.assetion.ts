export class ExistAssertion {

    static elementNotExist(element:string) {
        cy.get(element).should('not.exist')
    }
}