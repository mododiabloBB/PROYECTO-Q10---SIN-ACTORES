Feature: Gestión de completitud de recursos como estudiante

    Scenario Outline: Completar recurso
        Given El usuario "estudiante" ha iniciado sesión
        When El usuario navega a la página de "Cursos virtuales"
        And El usuario ingresar al curso virtual "nameCourseResourceStudent" pulsando sobre este
        And El usuario ingresar al recurso "<recursoPendiente>" pendiente por completar
        And El usuario responde el recurso pendiente
        Then La respuesta del usuario se guarda correctamente y el recurso se marca como completado

        Examples:

            | recursoPendiente            |
            | TAREA AUTOMATIZACION        |
            | FORO AUTOMATIZACION         |
            | CUESTIONARIO AUTOMATIZACION |