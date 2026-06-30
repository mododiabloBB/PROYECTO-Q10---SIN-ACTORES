import { When, Then } from '@badeball/cypress-cucumber-preprocessor'
import { StudentResourceManagement } from '@task/virtual-education/student-resource-management.task'

When('El usuario ingresar al recurso {string} pendiente por completar', function (recursoPendiente: string) {
    this.nameResource = recursoPendiente
    StudentResourceManagement.goToResource(recursoPendiente)
})

When('El usuario responde el recurso pendiente', function () {
    const resource = this.nameResource
    StudentResourceManagement.reponseResources(resource)
})

Then('La respuesta del usuario se guarda correctamente y el recurso se marca como completado', function () {
    const resource = this.nameResource
    StudentResourceManagement.validateResponseResource(resource)
})


// ELIMINAR RESPUESTA

When('El usuario ingresar a la respuesta del recurso {string}', (recursoRespuesta: string) => {
    StudentResourceManagement.goToResourceAnswer(recursoRespuesta)
})

When('El usuario elimina la respuesta del recurso', function () {
    const resource = this.nameResource
    StudentResourceManagement.deleteAnswerResource(resource)
})

Then('La respuesta se elimina del recurso', function() {
    const resource = this.nameResource
    StudentResourceManagement.validateResponseDelete(resource)
})