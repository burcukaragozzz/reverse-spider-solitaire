/* eslint-disable @typescript-eslint/no-namespace */
import './commands';

/// <reference types="cypress" />

declare global {
    namespace Cypress {
        interface Chainable {
            /**
             * Custom command to select DOM element by selector.
             * @example cy.getBySel('greeting')
             */
            dataCy(target: string): Chainable<Element>;
        }
    }
}
