import { When, Then } from '@badeball/cypress-cucumber-preprocessor'
import { PublicationCourseTask } from "@task/virtual-education/publication-course.task"
import { PublicationManagementAssertion } from '@assertion/virtual-education/publication-management.assertion'

// Escenario: Administrador publica el curso virtual

When('El usuario publica el curso virtual', () => {
    PublicationCourseTask.switchPublication()
})

Then('La modificación de la publicidad del curso se realiza de forma correcta', () => {
    PublicationManagementAssertion.shouldBePublished()
})

// Escenario: Estudiante ve curso virtual

Then('El usuario ve el curso virtual {string} publicado', (course:string) => {
    PublicationManagementAssertion.validateCourseStudent(course)
})

// Escenario: Administrador despublica el curso virtual

When('El usuario despublica el curso virtual', () => {
    PublicationCourseTask.switchPublication()
})

Then('La modificación de la despublicidad del curso se realiza de forma correcta', () => {
    PublicationManagementAssertion.shouldBeUnpublished()
})
