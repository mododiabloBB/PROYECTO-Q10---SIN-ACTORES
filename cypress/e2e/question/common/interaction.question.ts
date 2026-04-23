export class InteractionQuestion {

    static interactionElement(selector: string, callback: ($card: JQuery<HTMLElement>, type: string, index: number) => void) {
        cy.get(selector).each(($card, index) => {

        })
    }
}