declare global {
  namespace Cypress {
    interface Chainable {
      login(tipoUsuario: string): Chainable<void>;
    }
  }
}

export {};