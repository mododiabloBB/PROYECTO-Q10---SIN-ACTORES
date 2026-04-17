import {Given} from "@badeball/cypress-cucumber-preprocessor"

Given('El usuario {string} ha iniciado sesión', (user: string) => {
    cy.login(user)
});