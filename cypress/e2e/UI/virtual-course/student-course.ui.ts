export class StudentCourseUI {
    // Select de cursos estudiante
    static selectCourseType = 'estadoCurso'
    // Lista de recursos de menú lateral de estudiante
    static resourceList = '#edv-div-recursos a'
    // Botones para completar tareas, foros y cuestionarios
    static btnTaskComplete = '#btnCrearRespuesta'
    static globalBtn = '#submit-btn'
    static btnSendForum = '#submit-btn1'
    static btnSendTask = '#submit-btn2'
    static btnGoInQuestionnaire = '.div-iniciarCuestionario a'
    static btnStartQuestionnaire = '#inicializar_cuestionario'
    static btnQuestionnaireQuestions = '.button-cambiar-pagina'
    // Cuestionarios
    static questionList = '#responder_cuestionario'
    static cardQuestions = '#responder_cuestionario .card-preguntas'
    static questionType = '.card-header .card-span'
    static detailQuestionnaire = '#resultado_cuestionario'
    static actionDeleteAnswerQuestions = '#ListaEstudiantes i.fa-times'
    // Validación de respuestas
    static textTask = '#divRespuestaEstudiante .edv-description-resource p'
    static textForum = '#divDetalleForo .edv-description-resource p'
    //página de respuestas del estudiante
    static pageResponses = '#liRespuestas'
    static actionOptionsTaks = '#divRespuestaEstudiante i.icon-ellipsis'
    static optionDropdown = '.dropdown-menu a'
    static actionDeleteAnswerForum = '#divDetalleForo .hilo .btn-link'


}