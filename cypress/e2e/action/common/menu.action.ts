import {MenuUI} from '@ui/common/menu.ui'

export class MenuAction {

    static openMenuOption(option: string) {
        cy.visit("/");
        cy.get(MenuUI.navMenu).contains(option).click({ force: true })
        // Pediende validar si es necesario cambiar por una petición
        cy.get(MenuUI.spacePage).should('exist')
    }
}