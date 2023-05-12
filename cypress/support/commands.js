Cypress.Commands.add('selecionaUf', (uf) => {
    cy.get('#select-estado').click();
    cy.get('[data-value="' + uf + '"]').click();
})
