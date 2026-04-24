export class SelectAction {

    static seleccionarOpcionSelect (dataIdSelect: string, opcion: string | number) {
        cy.get(`select#${dataIdSelect}`).select(opcion, { force: true });
    }
    
}