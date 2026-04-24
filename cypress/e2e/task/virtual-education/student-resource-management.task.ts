import dataCourse from "@fixtures/virtual-education/course-management.json"
import { SharedUI } from "@ui/virtual-course/shared-ui"
import { StudentCourseUI } from '@ui/virtual-course/student-course.ui'
import { ClickAction } from '@action/common/click.action'
import { answerQuestionsAction } from '@action/virtual-education/answer-questions.action'
import { SharedTask } from "@task/virtual-education/shared.task"
import { VisibleAssertion } from '@assertion/common/visible.assertion'
import { TextAssertion } from '@assertion/common/text.assertion'
import { InteractionVirtualEducationQuestion } from '@questions/virtual-education/interaction-virtual-education.questions'

export class StudentResourceManagement {

    static goInCourse(course: string) {
        ClickAction.clickElementByText(SharedUI.courseVisualitationStudent, dataCourse[course])
        VisibleAssertion.shouldBeVisible(SharedUI.titleVirtualCourse)
    }

    static goToResource(resource: string) {
        ClickAction.clickElementByText(StudentCourseUI.resourceList, resource)
        TextAssertion.haveText(SharedUI.titleVirtualCourse, resource)
    }


    private static completeForum() {
        SharedTask.typeTextAreaResource('Respuesta de la tarea')
        ClickAction.clickElementByText(StudentCourseUI.btnSendForum, 'Agregar comentario')
    }

    private static completeTask() {
        ClickAction.clickElementByText(StudentCourseUI.btnTaskComplete, 'Responder tarea')
        SharedTask.typeTextAreaResource('Respuesta de la tarea')
        ClickAction.clickElementByText(StudentCourseUI.btnSendTask, 'Aceptar')
    }

    private static answerQuestionanaire(questionType: string) {
        this.goInQuestionnaire()
        // ejecutamos el callback del metodo
        InteractionVirtualEducationQuestion.interactionElement(StudentCourseUI.cardQuestions, StudentCourseUI.questionType, ($element, type, index) => {
            switch (type) {
                case 'Única respuesta':
                    answerQuestionsAction.answerSingleChoice($element)
                case 'Múltiple respuesta':
                    answerQuestionsAction.answerMultipleChoices($element)
                case 'Asociación':
                    
                case 'Rellene los espacios':

                case 'Descriptiva':
            }
        })
    }

    private static goInQuestionnaire() {
        //Ingresar al cuestionario
        ClickAction.clickElement(StudentCourseUI.btnGoInQuestionnaire)
        VisibleAssertion.shouldBeVisible(StudentCourseUI.btnStartQuestionnaire)
        ClickAction.clickElement(StudentCourseUI.btnStartQuestionnaire)
        VisibleAssertion.shouldBeVisible(StudentCourseUI.questionList)
    }

}