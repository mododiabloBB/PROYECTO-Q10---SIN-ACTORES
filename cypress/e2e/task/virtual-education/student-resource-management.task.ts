import dataCourse from "@fixtures/virtual-education/course-management.json"
import { SharedUI } from "@ui/virtual-course/shared-ui"
import { StudentCourseUI } from '@ui/virtual-course/student-course.ui'
import { ClickAction } from '@action/click.action'
import { SharedTask } from "@task/virtual-education/shared.task"
import { VisibleAssertion } from '@assertion/common/visible.assertion'
import { TextAssertion } from '@assertion/common/text.assertion'

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

    private static answerQuestions (questionType: string) {
        this.goInQuestionnaire()
        
        switch (questionType) {
            case 'Única respuesta':

        }
    }

    private static goInQuestionnaire() {
        //Ingresar al cuestionario
        ClickAction.clickElement(StudentCourseUI.btnGoInQuestionnaire)
        VisibleAssertion.shouldBeVisible(StudentCourseUI.btnStartQuestionnaire)
        ClickAction.clickElement(StudentCourseUI.btnStartQuestionnaire)
        VisibleAssertion.shouldBeVisible(StudentCourseUI.questionList)
    }

}