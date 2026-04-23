export class InteractionVirtualEducationQuestion {
    /**
       * Itera sobre cualquier grupo de elementos y permite ejecutar lógica personalizada.
       * @param selector - El selector CSS de las cards (ej: '.pregunta-container')
       * @param callback - La lógica que se ejecutará en cada elemento encontrado
    */
    static interactionElement(mainSelector: string, specificSelector: string, callback: ($element: JQuery<HTMLElement>, type: string, index: number) => void) {
        cy.get(mainSelector).each(($element, index) => {
            const type = $element.find(specificSelector).text().trim();
            // Ejecutamos el callback pasando el elemento actual
            callback($element, type, index);
        })
    }
}