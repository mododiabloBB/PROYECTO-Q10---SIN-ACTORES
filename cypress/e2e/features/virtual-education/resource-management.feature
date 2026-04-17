Feature: Gestion de recursos en los cursos virtuales

    Background: Login y busqueda de curso
        Given El usuario "administrador" ha iniciado sesión
        When El usuario navega a la página de "Cursos virtuales"
        And El usuario busca el curso virtual "nameCourseResource"
        And El usuario ingresar al curso virtual "nameCourseResource" pulsando la acción "Ingresar al curso"

    Scenario Outline: Crear recursos <nombreTipoRecurso>
        When El usuario presionar la acción para crear un nuevo recursos
        And El usuario selecciona el tipo de recurso <nombreTipoRecurso>
        And El usuario asigna el título "<tituloRecurso>" al recurso
        And El usuario asigna la descripción "<textoRecurso>" al recurso
        And El usuario configura las opciones del recurso
        And El usuario presionar el boton para guardar el recurso
        Then El recurso de guarda de forma correcta en el curso virtual

        Examples:
            | nombreTipoRecurso | tituloRecurso                      | textoRecurso                                                    |
            | Tarea             | Tarea automatizacion prueba        | Esta es una tarea creada desde la automatizacion de pruebas     |
            | Cuestionario      | Cuestionario automatizacion prueba | Este es un cuetionario creado desde la automatizacion de prueba |
            | Foro              | Foro automatizacion prueba         | Este es un foro creado desde la automatizacion de pruebas       |

    Scenario Outline: Editar recursos <nombreTipoRecurso>
        When El usuario ingresar al detallado del recurso "<nombreRecursoModificar>"
        And El usuario presionar la acción para "Editar" el recurso
        And El usuario modifica el titulo del recurso asignando "<tituloRecursoModificar>"
        And El usuario modifica la descripción del recurso asignando "<textoRecursoModificar>"
        And El usuario presionar el boton para guardar las modificaciones del recurso
        Then Las modificaciones del recurso se guardan de forma correcta en el recurso

        Examples:
            | nombreTipoRecurso | nombreRecursoModificar             | tituloRecursoModificar                       | textoRecursoModificar                                                     |
            | Tarea             | Tarea automatizacion prueba        | Tarea automatizacion prueba - EDITADA        | Esta es una tarea creada desde la automatizacion de pruebas - EDITADA     |
            | Cuestionario      | Cuestionario automatizacion prueba | Cuestionario automatizacion prueba - EDITADA | Este es un cuetionario creado desde la automatizacion de prueba - EDITADA |
            | Foro              | Foro automatizacion prueba         | Foro automatizacion prueba - EDITADA         | Este es un foro creado desde la automatizacion de pruebas - EDITADA       |

    Scenario Outline: Eliminar recursos <nombreTipoRecurso>
        When El usuario ingresar al detallado del recurso "<tituloRecursoEliminar>"
        And El usuario presionar la acción para "Eliminar" el recurso
        And El usuario confirma la eliminación del recurso de tipo
        Then El recurso se elimina del curso virtual

        Examples:
            | nombreTipoRecurso | tituloRecursoEliminar                        |
            | Tarea             | Tarea automatizacion prueba - EDITADA        |
            | Cuestionario      | Cuestionario automatizacion prueba - EDITADA |
            | Foro              | Foro automatizacion prueba - EDITADA         |