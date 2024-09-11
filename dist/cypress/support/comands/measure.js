const measure = (markName) => {
    const logFalse = { log: false };
    let measuredDuration;
    let log = Cypress.log({
        name: 'measure',
        message: markName,
        autoEnd: false,
        consoleProps() {
            return {
                command: 'measure',
                'mark name': markName,
                yielded: measuredDuration
            };
        }
    });
    cy.window(logFalse)
        .its('performance', logFalse)
        .invoke(logFalse, 'measure', markName)
        .then(({ duration }) => {
        measuredDuration = duration;
        log.end();
        return duration;
    });
    return;
};
Cypress.Commands.addAll({ measure });
export {};
