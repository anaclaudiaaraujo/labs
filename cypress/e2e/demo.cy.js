describe('Demonstração de criação de arquivo com dados aleatórios', () => {
  before(() => {
    cy.gerarMassaAutomatica();
    cy.visit('/');
  });
  it('Consumir dados do arquivo', () => {
    var usuarios = require('../fixtures/nome-do-arquivo.json');
    usuarios.forEach(usuario => {
      cy.get('input[name="nome"]').type(`${usuario.nome}`);
      cy.get('input[name="cpf"]').type(`${usuario.cpf}`);
      cy.get('input[placeholder="dd/mm/yyyy"]').type(`${usuario.data_nasc}`);
      cy.selecionaUfIndicado(`${usuario.uf}`);
      cy.get('input[name="cidade"]').type(`${usuario.cidade}`);
      cy.get('input[name="telefone"]').type(`${usuario.celular}`);
      cy.get('input[name="email"]').type(`${usuario.email}`);
      cy.get('button').contains('Enviar').click();
    });
  })
})