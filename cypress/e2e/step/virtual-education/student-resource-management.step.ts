import { When, Then } from '@badeball/cypress-cucumber-preprocessor'
import { StudentResourceManagement } from '@task/virtual-education/student-resource-management.task'

When('El usuario ingresar al recurso {string} pendiente por completar', function(recursoPendiente: string) {
    this.nameResource = recursoPendiente
    StudentResourceManagement.goToResource(recursoPendiente)
})

When('El usuario responde el recurso pendiente', function() {
    const resource = this.nameResource
    StudentResourceManagement.reponseResources(resource)
})

Then('La respuesta del usuario se guarda correctamente y el recurso se marca como completado', function() {
    const resource = this.nameResource
    StudentResourceManagement.validateResponseResource(resource)
})