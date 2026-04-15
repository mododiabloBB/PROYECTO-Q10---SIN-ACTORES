import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";

export default defineConfig({
    e2e: {
        baseUrl: "https://site6.q10.com/",
        defaultCommandTimeout: 30000,
        viewportWidth: 1980,
        viewportHeight: 1020,
        specPattern: "**/*.feature",
        async setupNodeEvents(
            on: Cypress.PluginEvents,
            config: Cypress.PluginConfigOptions
        ): Promise<Cypress.PluginConfigOptions> {
            // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
            await addCucumberPreprocessorPlugin(on, config);

            on(
                "file:preprocessor",
                createBundler({
                    plugins: [createEsbuildPlugin(config)],
                })
            );

            // Make sure to return the config object as it might have been modified by the plugin.
            return config;
        }
    },
    // Tener presente que la variables env del config NO pueden ir dentro del nodo e2e
    env: {
        // Ruta de los steps, esto debe definirse ya que la ruta por defecto es en support, pero al sacarla de esta el cucumber no sabe cual sería la ruta
        stepDefinitions: "cypress/e2e/step/**/*.{js,ts}",
        institucion: 'ordenesPago' // Se usa esta institución como institución de pruebas de manera local
    }
});