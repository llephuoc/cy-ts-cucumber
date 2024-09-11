const mark = (markName) => {
    const logFalse = { log: false };
    Cypress.log({
        name: 'mark',
        message: markName,
        consoleProps() {
            return {
                command: 'mark',
                'mark name': markName
            };
        }
    });
    cy.window(logFalse)
        .its('performance', logFalse)
        .invoke(logFalse, 'mark', markName);
    return;
};
Cypress.Commands.addAll({ mark });
export {};
