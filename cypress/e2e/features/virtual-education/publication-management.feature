Feature: Gestión de cde publicación de cursos virtuales

    Scenario: Publicar curso virtual
        Given el usuario "administrador" ha iniciado sesión
        When El usuario navega a la página de "Cursos virtuales"
        And El usuario busca el curso virtual "nameCourseResource"
        And El usuario ingresar al curso virtual "nameCourseResource" pulsando la acción "Ingresar al curso"
        And El usuario ingresa a los ajustes del curso virtual
        And El usuario publica el curso virtual
        Then La modificación de la publicidad del curso se realiza de forma correcta

    Scenario: Ver curso virtual como estudiante
        Given el usuario "estudiante" ha iniciado sesión
        When El usuario navega a la página de "Cursos virtuales"
        Then El usuario ve el curso virtual publicado

    Scenario: Despublicar curso virtual
        Given el usuario "administrador" ha iniciado sesión
        When El usuario navega a la página de "Cursos virtuales"
        And El usuario busca el curso virtual "nameCourseResource"
        And El usuario ingresar al curso virtual "nameCourseResource" pulsando la acción "Ingresar al curso"
        And El usuario ingresa a los ajustes del curso virtual
        And El usuario despublica el curso virtual
        Then La modificación de la despublicidad del curso se realiza de forma correcta