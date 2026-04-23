import { When, Then } from '@badeball/cypress-cucumber-preprocessor'
import { StudentResourceManagement } from '@task/virtual-education/student-resource-management.task'
import { SharedTask } from '@task/virtual-education/shared.task'

When('El usuario ingresar al recurso "<recursoPendiente>" pendiente por completar', (recursoPendiente: string) => {
    StudentResourceManagement.goToResource(recursoPendiente)
})

When('El usuario completa el recurso pendiente', () => {

})

Then('La respuesta del usuario se guarda correctamente y el recurso se marca como completado', () => {
})