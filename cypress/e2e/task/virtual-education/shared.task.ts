import { ClickAction } from '@action/common/click.action'
import { SharedUI } from "@ui/virtual-course/shared-ui"
import { TextAssertion } from '@assertion/common/text.assertion'
import { VisibleAssertion } from '@assertion/common/visible.assertion'
import { TypeAction } from '@action/common/type.action'

export class SharedTask {

    static typeTextAreaResource(text: string) {
        VisibleAssertion.shouldBeVisible(SharedUI.textAreaResource)
        ClickAction.clickElement(SharedUI.textAreaResource)
        TypeAction.typeIn(SharedUI.textAreaFocusResource, text)
        TextAssertion.haveText(SharedUI.textAreaP, text)
    }
}