export class TypeAction {
    
    static typeIn (elemento: string, texto: string) {
        cy.get(elemento).clear().type(texto, {delay: 60})
    }
}