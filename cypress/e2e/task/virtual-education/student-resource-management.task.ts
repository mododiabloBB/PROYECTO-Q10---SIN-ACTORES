import { ClickAction } from '@action/click.action'
import { SharedUI } from "@ui/virtual-course/shared-ui"
import { VisibleAssertion } from '@assertion/common/visible.assertion'
import dataCourse from "@fixtures/virtual-education/course-management.json"

export class StudentResourceManagement {

    static goInCourse(course: string) {
        ClickAction.clickElementByText(SharedUI.courseVisualitationStudent, dataCourse[course])
        VisibleAssertion.shouldBeVisible(SharedUI.titleVirtualCourse)
    }
}