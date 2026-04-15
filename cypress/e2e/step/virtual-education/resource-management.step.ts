import { When, Then } from '@badeball/cypress-cucumber-preprocessor'
import { ResourceManagementTask } from '@task/virtual-education/resource-management.task'
import { CreatedResourceAssertion } from '@assertion/virtual-education/resource-management.assertion'
import { ModalAction } from '@action/common/modal.action'

// Escenarios: Crear recursos
When('El usuario presionar la acción para crear un nuevo recursos', () => {
    ResourceManagementTask.clickDropdownResource()
})

When('El usuario selecciona el tipo de recurso {word}', (resource: string) => {
    ResourceManagementTask.selectResource(resource)
})

When('El usuario asigna el título {string} al recurso', function (title: string) {
    this.resourceTitle = title
    ResourceManagementTask.typeTitleResource(title)
})

When('El usuario asigna la descripción {string} al recurso', function (description: string) {
    this.resourceDescription = description
    ResourceManagementTask.typeDescriptionResource(description)
})

When('El usuario configura las opciones del recurso', () => {
    ResourceManagementTask.takeOffRestriction()
})

When('El usuario presionar el boton para guardar el recurso', () => {
    ResourceManagementTask.createResource()
})

Then('El recurso de guarda de forma correcta en el curso virtual', function () {
    const title = this.resourceTitle
    const description = this.resourceDescription

    CreatedResourceAssertion.createdResource(title, description)
})

// Escenarios: Editar recursos
When('El usuario modifica el titulo del recurso asignando {string}', function (titleEdition: string) {
    this.titleEdition = titleEdition
    ResourceManagementTask.typeTitleResource(titleEdition)
})

When('El usuario modifica la descripción del recurso asignando {string}', function (descriptionEdition: string) {
    this.descriptionEdition = descriptionEdition
    ResourceManagementTask.typeDescriptionResource(descriptionEdition)
})

When('El usuario presionar el boton para guardar las modificaciones del recurso', () => {
    ResourceManagementTask.createResource()
})

Then('Las modificaciones del recurso se guardan de forma correcta en el recurso', function() {
    const titleEdition = this.titleEdition
    const descriptionEdition = this.descriptionEdition

    CreatedResourceAssertion.createdResource(titleEdition, descriptionEdition)
})

// Escenarios: Eliminar recursos
When('El usuario confirma la eliminación del recurso de tipo', () => {
    ModalAction.sudmitModalForm()
})

Then('El recurso se elimina del curso virtual', function () {
    const resource = this.nameResource

    ResourceManagementTask.validateResourceDeleted(resource)
})