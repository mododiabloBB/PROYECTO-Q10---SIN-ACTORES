import { QuestionsUI } from "@ui/virtual-course/questions.ui";
import { SelectAction } from "@action/common/select.action";

export class answerQuestionsAction {
  static answerSingleChoice($card: JQuery<HTMLElement>) {
    cy.wrap($card)
      .find(QuestionsUI.rowOptions)
      .each(($row) => {
        const optionText = $row.find("p").text().trim();

        if (optionText == "1") {
          cy.wrap($row).find(QuestionsUI.rowInput).click();
          return false;
        }
      });
  }

  static answerMultipleChoices($card: JQuery<HTMLElement>) {
    cy.wrap($card)
      .find(QuestionsUI.rowOptions)
      .each(($row) => {
        const optionText = $row.find("p").text().trim();

        if (optionText == "1" || optionText == "2") {
          cy.wrap($row).find(QuestionsUI.rowInput).click();
        }
      });
  }

  static answerAssociation($card: JQuery<HTMLElement>) {
    // Iteramos la columna DERECHA (ítems fijos con badge)
    cy.wrap($card)
      .find(QuestionsUI.rowAssociation)
      .each(($rowRight, rightIndex) => {
        const textRight = $rowRight.find("p").last().text().trim();
        const dynamicId = `#selectpicker_${rightIndex}`;

        // Buscamos en la columna IZQUIERDA cuál coincide
        cy.wrap($card)
          .find(QuestionsUI.rowAssociation)
          .each(($rowLeft, leftIndex) => {
            const textLeft = $rowLeft.find("p").first().text().trim();

            if (textLeft === textRight) {
              // El índice izquierdo (+1 si empieza en 1) es la opción correcta
              const optionValue = (leftIndex + 1).toString();
              SelectAction.seleccionarOpcionSelectByID(dynamicId, optionValue);
            }
          });
      });
  }

  static answerSpace ($card: JQuery<HTMLElement>) {
    // 1. Escribe "poesías" en el input de texto
    cy.wrap($card)
      .find(QuestionsUI.inputWriteSpace)
      .clear()
      .type("poesías", { delay: 60 });

    // 2. Selecciona la opción "admirador" en el select
    cy.wrap($card)
      .find(QuestionsUI.selectSpace)
      .find("select")
      .select("admirador", { force: true });
  }

  static answerTextArea($card: JQuery<HTMLElement>) {
    cy.wrap($card)
        .find(QuestionsUI.textArea)
        .clear()
        .type('hola', { delay: 60 });
}
}
