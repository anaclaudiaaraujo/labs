const faker = require('faker-br');

export function gerarDataNascimento() {
    const anoAtual = new Date().getFullYear();
    const min = anoAtual - 49;
    const max = anoAtual - 90;

    const dataNascimento = faker.date.between(max, min);
    let diaNascimento = dataNascimento.getDate();
    let mesNascimento = dataNascimento.getMonth() + 1;
    const anoNascimento = dataNascimento.getFullYear();

    diaNascimento < 10 ? diaNascimento = `0${diaNascimento}` : dataNascimento
    mesNascimento < 10 ? mesNascimento = `0${mesNascimento}` : mesNascimento

    let dataNascimentoTratada = (diaNascimento + '/' + mesNascimento + '/' + anoNascimento);

    return dataNascimentoTratada;
}

//Utilizada para casos específicos onde é preciso uma data com formato ISO 8601
export function gerarDataNascISO(dataNascimentoTratada){
    let separaData = dataNascimentoTratada.split('/');
    let ano = separaData[2];
    let mes = separaData[1];
    let dia = separaData[0];
    
   let dataNascimentoISO = new Date(`${ano}-${mes}-${dia}`).toISOString();
   return dataNascimentoISO;
}