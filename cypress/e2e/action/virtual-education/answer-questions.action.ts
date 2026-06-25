import { QuestionsUI } from "@ui/virtual-course/questions.ui";
import { SharedTask } from "@task/virtual-education/shared.task"
import { SelectAction } from "@action/common/select.action";
import { TypeAction } from "@action/common/type.action"

// el wrap de cada metodo toma  el elemento retornado en el callback

export class answerQuestionsAction {

  static answerSingleChoice($card: JQuery<HTMLElement>) {
    cy.wrap($card)
      .find(QuestionsUI.rowOptions)
      .each(($row) => {
        const optionText = $row.find("p").text().trim();

        if (optionText == "1") {
          cy.wrap($row).find('input').click();
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
          cy.wrap($row).find('input').click();
        }
      });
  }

  static answerAssociation($card: JQuery<HTMLElement>) {

    cy.wrap($card)
      .find(QuestionsUI.rowAssociation)
      .each(($rowRight, rightIndex) => {

        const textRight = $rowRight.find('p').last().text().trim();
        // El id es el índice de la fila derecha, no de la pregunta
        const dynamicId = `selectpicker_${rightIndex}`;

        cy.wrap($card)
          .find(QuestionsUI.rowAssociation)
          .each(($rowLeft, leftIndex) => {

            const textLeft = $rowLeft.find('p').first().text().trim();

            if (textLeft === textRight) {
              const optionValue = (leftIndex + 1).toString();
              SelectAction.seleccionarOpcionSelectByID(dynamicId, optionValue);
            }
          });
      });
  }

  static answerSpace($card: JQuery<HTMLElement>) {
    TypeAction.typeIn(QuestionsUI.inputWriteSpace, 'poesías')
    SelectAction.seleccionarOpcionSelectByClass(QuestionsUI.selectSpace, 'admirador')
  }

  static answerTextArea($card: JQuery<HTMLElement>) {
    cy.wrap($card)
      .find(QuestionsUI.textArea)
      .clear()
      .type('hola', { delay: 60 });


      // VALIDAR LA POSIBILIDAD DE USAR EL METODO GENERICO Y QUE TAN GENERICO ES
      //SharedTask.typeTextAreaResource('Hola Hola prueba')
  }
}
