//Importação da biblioteca
import faker from 'faker-br';
import { gerarDataNascimento, gerarDataNascISO } from './utils';

//Criação de comando customizado
Cypress.Commands.add('gerarMassaAutomatica', () => {
    cy.writeFile('cypress/fixtures/nome-do-arquivo.json',
        Cypress._.times(5, () => {
            let dataNascimento = gerarDataNascimento();
            let dataNascimento2 = gerarDataNascISO(gerarDataNascimento());          

            const nome = faker.name.firstName() + ' ' + faker.name.lastName();
            const cpf = faker.br.cpf();
            const uf = faker.address.state();
            const cidade = faker.address.city();
            const celular = faker.phone.phoneNumber();
            const email = faker.internet.email();

            return {
                'nome': `${nome}`,
                'cpf': `${cpf}`,
                'data_nasc': `${dataNascimento}`,
                'data_nascISO':`${dataNascimento2}`,
                'uf': `${uf}`,
                'cidade': `${cidade}`,
                'celular': `${celular}`,
                'email': `${email}`
            }
        })
    )
})
