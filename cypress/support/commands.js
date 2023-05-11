Cypress.Commands.add('selecionaUfIndicado', (uf) => {
    cy.get('#mui-component-select-estado').click();
    cy.get('[data-value="' + uf + '"]').click();
})