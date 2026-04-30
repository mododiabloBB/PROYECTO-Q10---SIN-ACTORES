import { QuestionsUI } from '@ui/virtual-course/questions.ui'
import { SelectAction } from '@action/common/select.action'

export class answerQuestionsAction {

    static answerSingleChoice($card: JQuery<HTMLElement>) {
        cy.wrap($card).find(QuestionsUI.rowOptions).each(($row) => {
            const optionText = $row.find('p').text().trim()

            if (optionText == "1") {
                cy.wrap($row).find(QuestionsUI.rowInput).click()
                return false
            }
        });
    }

    static answerMultipleChoices($card: JQuery<HTMLElement>) {
        cy.wrap($card).find(QuestionsUI.rowOptions).each(($row) => {
            const optionText = $row.find('p').text().trim()

            if (optionText == "1" || optionText == "2") {
                cy.wrap($row).find(QuestionsUI.rowInput).click()
            }
        });
    }

    // ESTO SE DEBE CAMBIAR VALIDANDO LA MEJOR FORMA LOGICA DE HACERLO

    static answerAssociation($card: JQuery<HTMLElement>) {

        cy.wrap($card).find(QuestionsUI.rowAssociation).each(($row) => {

            const textP1 = $row.find('p').first().text().trim();

            cy.wrap($card).find(QuestionsUI.rowAssociation).each(($row, index) => {

                const textP2 = $row.find('p').last().text().trim();
                const dynamicId = `#selectpicker_${index}`

                if (textP2 == textP1) {
                    SelectAction.seleccionarOpcionSelect(dynamicId, textP1)
                }
            })
        })
    }

    static answerSpace($card: JQuery<HTMLElement>) {
            
    }

}