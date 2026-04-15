import {Given} from "@badeball/cypress-cucumber-preprocessor"

Given('el usuario {string} ha iniciado sesión', (user: string) => {
    cy.login(user)
});