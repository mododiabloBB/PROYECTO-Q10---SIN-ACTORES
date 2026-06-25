import dataCourse from "@fixtures/virtual-education/course-management.json"
import { AttrVirtualEducationQuestion } from "@questions/virtual-education/attr-virtual-education.question"
import { AttrQuestion } from '@questions/common/attr.question'
import { PublicationCourseUI } from "@ui/virtual-course/publication-course.ui"
import { SharedUI } from "@ui/virtual-course/shared-ui"
import { TextAssertion } from "@assertion/common/text.assertion"

export class PublicationManagementAssertion {

    static validateOriginalTitle(expectedTitle: string) {
        AttrVirtualEducationQuestion.takeOriginalTitle(PublicationCourseUI.sideNavButton).should('eq', expectedTitle)
    }

    static shouldBePublished() {
        AttrQuestion.takeClass(PublicationCourseUI.switchPublication).then(($switch) => {
            cy.wrap($switch).should('include', PublicationCourseUI.switchOn)
        })
    }

    static shouldBeUnpublished() {
        AttrQuestion.takeClass(PublicationCourseUI.switchPublication).then(($switch) => {
            cy.wrap($switch).should('include', PublicationCourseUI.switchOff)
        })
    }

    static validateCourseStudent(course:string) {
        //VisibleAssertion.shouldBeVisible(SharedUI.courseVisualitationStudent)
        TextAssertion.haveText(SharedUI.courseVisualitationStudent, dataCourse[course])
    }
}