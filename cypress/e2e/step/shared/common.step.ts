import {When} from "@badeball/cypress-cucumber-preprocessor"
import {MenuAction} from '@action/common/menu.action'

When ('El usuario navega a la página de {string}', (page: string) => {
    MenuAction.openMenuOption(page)
})