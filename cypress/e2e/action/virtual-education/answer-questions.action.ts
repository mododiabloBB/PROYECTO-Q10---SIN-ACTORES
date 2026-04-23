import { QuestionsUI } from '@ui/virtual-course/questions.ui'

export class answerQuestionsAction {

    static AnswerSingleChoice ($card: JQuery<HTMLElement>) {
        cy.wrap($card).find(QuestionsUI.rowOptions).each(($row) => {
                const optionText = $row.find('p').text().trim();

                if (optionText == "1") {
                    cy.wrap($row).find(QuestionsUI.rowInput).click();
                    return false; 
                }
            });
    }
}