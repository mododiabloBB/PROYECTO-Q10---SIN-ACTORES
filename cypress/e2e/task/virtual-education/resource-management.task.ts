import { ClickAction } from '@action/click.action'
import { ResourceManagementUI } from '@ui/virtual-course/resource.ui'
import { SharedUI } from "@ui/virtual-course/shared-ui"
import { VisibleAssertion } from '@assertion/common/visible.assertion'
import { TextAssertion } from '@assertion/common/text.assertion'
import { TypeAction } from '@action/type.action'
import { WaitAction } from '@action/request.action'

export class ResourceManagementTask {

    static clickDropdownResource() {
        ClickAction.clickElement(ResourceManagementUI.dropdownResource)
        VisibleAssertion.shouldBeVisible(ResourceManagementUI.containerOfResorce)
    }

    static selectResource(resource: string) {
        // AGREGAR ESPERA DE NO VISUALIZACION DE LOADER
        ClickAction.clickElementByText(ResourceManagementUI.listOfResource, resource)
        TextAssertion.haveText(ResourceManagementUI.resourceLabel, resource)
    }

    static typeTitleResource(value: string) {
        TypeAction.typeIn(ResourceManagementUI.titleResource, value)
        TextAssertion.haveValue(ResourceManagementUI.titleResource, value)
    }

    static takeOffRestriction() {
        cy.get(ResourceManagementUI.restrictionOn).each(($switch) => {
            ClickAction.clickElementByEq($switch, 0)
        })
    }

    static createResource() {
        WaitAction.waitRequest('POST', '**/EducacionVirtual/v3/**/Actualizar', () => ClickAction.clickElement(ResourceManagementUI.btnSubmit))
    }

    static detailResource(resource: string) {
        // AGREGAR ESPERA DE VISUALIZACION DE ELEMENTO A PRESIONAR
        WaitAction.waitRequest('GET', `**/EducacionVirtual/v3/*/*`, () => ClickAction.clickElementByText(ResourceManagementUI.listOfResources, resource))
        VisibleAssertion.shouldBeVisible(ResourceManagementUI.descriptionResourceCreated)
    }

    static pressAction(action: string) {
        switch (action) {
            case "Editar":
                ClickAction.clickElementByText(ResourceManagementUI.btnEditResource, action)
                VisibleAssertion.shouldBeVisible(ResourceManagementUI.titleResource)
                VisibleAssertion.shouldBeVisible(SharedUI.textAreaResource)
                break

            case "Eliminar":
                ClickAction.clickElement(ResourceManagementUI.optionResource)
                VisibleAssertion.shouldBeVisible(ResourceManagementUI.optionDelete)
                ClickAction.clickElementByText(ResourceManagementUI.optionDelete, action)
                break
        }
    }

    static validateResourceDeleted(resource: string) {
        TextAssertion.notHaveText(ResourceManagementUI.listOfResources, resource)
    }
}