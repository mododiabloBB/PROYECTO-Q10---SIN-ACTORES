import dataCourse from "@fixtures/virtual-education/course-management.json"
import {When} from "@badeball/cypress-cucumber-preprocessor"
import {CreateVirtualCourseUI} from "@ui/virtual-course/virtual-course.ui"
import {TableAction} from '@action/common/table.action'
import {ResourceManagementTask} from '@task/virtual-education/resource-management.task'
import {VisibleAssertion} from "@assertion/common/visible.assertion"
import { PublicationCourseTask } from "@task/virtual-education/publication-course.task"

// Estos este se usa en la ruta '/virtual-education/course-management.feature'
When ('El usuario busca el curso virtual {string}', (course: string) => {
    // Aquí filtramos el nombre a buscar, en base al nombre que se asigna en el feature
    TableAction.search(dataCourse[course])
})

When('El usuario ingresar al curso virtual {string} pulsando la acción {string}', (course: string, action: string) => {
    TableAction.clickAction(dataCourse[course], action)
    VisibleAssertion.shouldBeVisible(CreateVirtualCourseUI.titleVirtualCourse)
})

// Este este se usa en la ruta '/virtual-education/resource-management.feature'
When('El usuario ingresar al detallado del recurso {string}', function(resource: string) {
    this.nameResource = resource
    ResourceManagementTask.detailResource(resource)
})

When('El usuario presionar la acción para {string} el recurso', (action: string) => {
    ResourceManagementTask.pressAction(action)
})

// Este este se usa en la ruta '/virtual-education/publication-management.feature'
When('El usuario ingresa a los ajustes del curso virtual', () => {
    PublicationCourseTask.goToSettings()
})