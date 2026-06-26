export class StudentCourseUI {
    // Lista de recursos de menú lateral de estudiante
    static resourceList = '#edv-div-recursos a'
    // Botones para completar tareas, foros y cuestionarios
    static btnTaskComplete = '#btnCrearRespuesta'
    static btnSendForum = '#submit-btn1'
    static btnSendTask = '#submit-btn2'
    static btnGoInQuestionnaire = '.div-iniciarCuestionario a'
    static btnStartQuestionnaire = '#inicializar_cuestionario'
    // Cuestionarios
    static questionList = '#responder_cuestionario'
    static cardQuestions = '#responder_cuestionario .card-preguntas'
    static questionType = '.card-header .card-span'
    static btnQuestionnaireQuestions = '.button-cambiar-pagina'
    static detailQuestionnaire = 'resultado_cuestionario'
    // Validación de respuestas
    static textTask = '#divRespuestaEstudiante .edv-description-resource p'
    static textForum = '#divDetalleForo .edv-description-resource p'
}