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

    static reponseResources(resource:string){
        switch (resource) {
                case 'TAREA AUTOMATIZACION':
                    this.completeTask()
                    break
                case 'FORO AUTOMATIZACION':
                    this.completeForum()
                    break
                case 'CUESTIONARIO AUTOMATIZACION':
                    this.answerQuestionanaire()
                    break
            }
    }

    static validateResponseResource(resource:string) {
        switch (resource) {
                case 'TAREA AUTOMATIZACION':
                    TextAssertion.haveText(, 'Respuesta de la tarea')
                    break
                case 'FORO AUTOMATIZACION':
                    
                    break
                case 'CUESTIONARIO AUTOMATIZACION':
                    
                    break
            }
    }

    // METODOS PARA COMPLETAR RECURSOS

    private static completeForum() {
        SharedTask.typeTextAreaResource('Respuesta de la tarea')
        ClickAction.clickElementByText(StudentCourseUI.btnSendForum, 'Agregar comentario')
    }

    private static completeTask() {
        ClickAction.clickElementByText(StudentCourseUI.btnTaskComplete, 'Responder tarea')
        SharedTask.typeTextAreaResource('Respuesta de la tarea')
        ClickAction.clickElementByText(StudentCourseUI.btnSendTask, 'Aceptar')
    }
    
    private static goInQuestionnaire() {
        //Ingresar al cuestionario
        ClickAction.clickElement(StudentCourseUI.btnGoInQuestionnaire)
        VisibleAssertion.shouldBeVisible(StudentCourseUI.btnStartQuestionnaire)
        ClickAction.clickElement(StudentCourseUI.btnStartQuestionnaire)
        VisibleAssertion.shouldBeVisible(StudentCourseUI.questionList)
    }
    
    private static answerQuestionanaire() {
        this.goInQuestionnaire()
        // ejecutamos el callback del metodo el cual retorna el selector HTML de la card de forma iterada
        InteractionVirtualEducationQuestion.interactionElement(StudentCourseUI.cardQuestions, StudentCourseUI.questionType, ($element, type) => {
            switch (type) {
                case 'Única respuesta':
                    answerQuestionsAction.answerSingleChoice($element)
                    break
                case 'Múltiple respuesta':
                    answerQuestionsAction.answerMultipleChoices($element)
                    break
                case 'Asociación':
                    answerQuestionsAction.answerAssociation($element)
                    break
                case 'Rellene los espacios':
                    answerQuestionsAction.answerSpace($element)
                    break
                case 'Descriptiva':
                    answerQuestionsAction.answerTextArea($element)
                    break
            }
        })
    }

    // METODOS PARA VALIDAR LOS RECURSOS COMPLETADOS
}