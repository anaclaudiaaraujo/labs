//Importação da biblioteca
import faker from 'faker-br';

//Criação de comando customizado
Cypress.Commands.add('gerarMassaAutomatica', () => {
    /**
     * Armazena o ano atual
     * Calcula o range para geração de ano de nascimento dentro do intervalo desejado
     * Para o exemplo, o ano de nascimento será sempre de uma pessoa com, no mínimo, 49 anos e máximo de 90 anos
     */
    const currentYear = new Date().getFullYear();
    const minimo = currentYear - 49;
    const maximo = currentYear - 90;

    /**
     * Define o caminho, nome e estrutura do arquivo que será gerado
     */
    cy.writeFile('cypress/fixtures/nome-do-arquivo.json',
    /**
     * Define a quantidade de objetos do arquivo
     */
        Cypress._.times(5, () => {
            //Gera uma data de nascimento dentro do intervalo calculado acima
            const nascimento = faker.date.between(maximo, minimo);
            
            /**
             * Extrai o dia, mês e ano do nascimento
             * Os meses são retornados como índices de um array (0, 1, 2...), por isso a necessidade de somar 1
            */
            var diaNascimento = nascimento.getDate();
            var mesNascimento = (1 + (nascimento.getMonth()));
            const anoNascimento = nascimento.getFullYear();
            
            /**
             * Verifica se o dia e mês são menores que 10 e acrescenta um zero à esquerda
             * O formulário não compreende a digitação da barra no campo de data
             *      Ao digitar uma data como 7/7/2023, acusava data inválida
             */
            if (diaNascimento < 10) {
                diaNascimento = `0${diaNascimento}`;
            }
            if (mesNascimento < 10) {
                mesNascimento = `0${mesNascimento}`;
            }

            //Montagem da data
            var dataNascimento = (diaNascimento + '/' + mesNascimento + '/' + anoNascimento);

            /**
             * Gera e armazena:
             *      nome e sobrenome brasileiros
             *      CPF
             *      UF
             *      Cidade
             *      Celular
             *      E-mail
             * 
             * Caso o teste a ser executado envolva envio/recebimento de mensagens, não é recomendável utilizar um e-mail aleatório
            */
            const nome = faker.name.firstName() + ' ' + faker.name.lastName();
            const cpf = faker.br.cpf();
            const uf = faker.address.state();
            const cidade = faker.address.city();
            const celular = faker.phone.phoneNumber();
            const email = faker.internet.email();

            //Passando os valores gerados utilizando a interpolação
            return {
                'nome': `${nome}`,
                'cpf': `${cpf}`,
                'data_nasc': `${dataNascimento}`,
                'uf': `${uf}`,
                'cidade': `${cidade}`,
                'celular': `${celular}`,
                'email': `${email}`
            }
        })
    )
})