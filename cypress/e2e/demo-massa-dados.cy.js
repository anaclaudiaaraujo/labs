describe('Demonstração de criação de arquivo com dados aleatórios e seu consumo', () => {
  before(() => {
    cy.gerarMassaAutomatica();
    //cy.visit('/');
  });
  it.skip('Exemplo de como consumir dados do arquivo', () => {
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
      cy.url().should('eq', '/success');
    });
  });
})
