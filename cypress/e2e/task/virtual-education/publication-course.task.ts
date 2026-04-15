import { AttrVirtualEducationQuestion } from "@questions/virtual-education/attr-virtual-education.question"
import { PublicationManagementAssertion } from "@assertion/virtual-education/publication-management.assertion"
import { VisibleAssertion } from "@assertion/common/visible.assertion"
import { TextAssertion } from "@assertion/common/text.assertion"
import { ClickAction } from "@action/click.action"
import { PublicationCourseUI } from "@ui/virtual-course/publication-course.ui"
import { CreateVirtualCourseUI } from "@ui/virtual-course/virtual-course.ui"
import { AttrQuestion } from "@questions/common/attr.question"



export class PublicationCourseTask {

    static goToSettings() {
        this.expandSideNavIfNeeded()
        this.shouldBeOnSettingsPage()
        TextAssertion.haveText(CreateVirtualCourseUI.titleVirtualCourse, "Ajustes")
    }

    private static expandSideNavIfNeeded() {
        // Se valida si el side nav esta expandido, si no lo esta se da click para expandirlo y validar que se haya expandido
        AttrVirtualEducationQuestion.takeOriginalTitle(PublicationCourseUI.sideNavButton).then((classValue) => {
            if (classValue.includes("Expandir")) {
                ClickAction.clickElement(PublicationCourseUI.sideNavButton)
                PublicationManagementAssertion.validateOriginalTitle("Contraer")
            }
        })
    }

    private static shouldBeOnSettingsPage() {
        ClickAction.clickElementByText(PublicationCourseUI.settingsOption, "Ajustes")
        VisibleAssertion.shouldNotBeVisible(PublicationCourseUI.loaderContentCourse)
    }

    static switchPublication() {
        cy.get(PublicationCourseUI.settingsLabel).each(($label) => {
            if ($label.text().trim() === "Publicado") {
                ClickAction.clickElement(PublicationCourseUI.switchPublication)
            }
        })
    }
}