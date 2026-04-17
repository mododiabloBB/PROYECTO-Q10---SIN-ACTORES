import { ClickAction } from '@action/click.action'
import { SharedUI } from "@ui/virtual-course/shared-ui"

export class StudentResourceManagement {

    static goInCourse(course: string) {
        ClickAction.clickElementByText(SharedUI.courseVisualitationStudent, course)
    }
}