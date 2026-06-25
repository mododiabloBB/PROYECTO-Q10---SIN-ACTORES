import { When, Then } from '@badeball/cypress-cucumber-preprocessor'
import { StudentResourceManagement } from '@task/virtual-education/student-resource-management.task'
import { SharedTask } from '@task/virtual-education/shared.task'

When('El usuario ingresar al recurso {string} pendiente por completar', function (recursoPendiente: string) {
    this.nameResource = recursoPendiente
    StudentResourceManagement.goToResource(recursoPendiente)
})

When('El usuario responde el recurso pendiente', function () {
    const resource = this.nameResource
    StudentResourceManagement.reponseResources(resource)
})