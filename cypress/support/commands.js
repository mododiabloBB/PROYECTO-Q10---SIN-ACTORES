// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


// TENER PRESENTE QUE LA INTERFAS DE NUESTRO LOGIN ESTA EN "support/index.js"
// TENER PRESENTE QUE LA INTERFAS DE NUESTRO LOGIN ESTA EN "support/index.js"
// TENER PRESENTE QUE LA INTERFAS DE NUESTRO LOGIN ESTA EN "support/index.js"
// TENER PRESENTE QUE LA INTERFAS DE NUESTRO LOGIN ESTA EN "support/index.js"
// TENER PRESENTE QUE LA INTERFAS DE NUESTRO LOGIN ESTA EN "support/index.js"
Cypress.Commands.add('login', (tipoUsuario) => {

    const institucionKey = Cypress.env('institucion')

    // Guardamos el json de instituciones en nuestro wrap
    cy.fixture('login/instituciones').then((instituciones) => {
        // Filtramos los datos de la institución en base al nombre enviado
        const institucion = instituciones[institucionKey];
        const { aplentId } = institucion;
        const usuarioLogin = institucion.usuarios[tipoUsuario]
        const { usuario, contrasenia } = usuarioLogin

        // Se construye la URL de la base de datos
        const loginUrl = `login?ReturnUrl=%2F&aplentId=${aplentId}`;

        // Creamos la sesión en base a institución y usuario
        cy.session(`sesion ${institucionKey} - usuario ${tipoUsuario}`, () => {
            cy.visit(loginUrl)
            cy.get('#NombreUsuario').clear().type(usuario);
            cy.get('#Contrasena').clear().type(contrasenia);
            cy.intercept('GET', 'https://site6.q10.com/').as('InicioSesion');
            cy.get('#submit-btn').click();
            cy.wait('@InicioSesion');
        }, {
            validate: () => {
                cy.getCookie('.AspNet.ApplicationCookie').should('exist');
            }
        })
        Cypress.env('institucionSesion', institucionKey)
    })
})