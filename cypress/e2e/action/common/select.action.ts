export class SelectAction {
  static seleccionarOpcionSelectByID(
    dataIdSelect: string,
    opcion: string | number,
  ) {
    cy.get(`select#${dataIdSelect}`).select(opcion, { force: true });
  }

  static seleccionarOpcionSelectByClass(
    dataIdSelect: string,
    opcion: string | number,
  ) {
    cy.get(`select${dataIdSelect}`).select(opcion, { force: true });
  }
}
