const NovoFuncionario = require('./NovoFuncionario')
const Funcionarios = require('./Funcionarios')
const readline = require('readline-sync')
const entradaInicial = readline.question('1-inserir Funcionário\n2-tabela de funcionarios\n');

while (entradaInicial !== 3) {
    switch (entradaInicial) {
        case "1":

            const entradaNome = readline.question('Nome do Funcionário: \n');
            const entradaSalFixo = readline.question('Salário Fixo: \n');
            const entradaComissao = readline.question('Comissão: \n');
            const novoFuncionario = new NovoFuncionario(entradaNome, entradaSalFixo, entradaComissao);
            Funcionarios.push(novoFuncionario)
            console.table(novoFuncionario)
            console.table(Funcionarios)


            const entradaSecundaria = readline.question('1-Continuar\n2-Sair\n');
            switch (entradaSecundaria) {
                case "1":
                    console.log('====================================');
                    console.log("Continuando");
                    console.log('====================================');
                    break;
                case "2":

                    return


                default:
                    console.log('====================================');
                    console.log("Opção Inválida");
                    console.log('====================================');
            }

            break;
        case "2":
            console.table(Funcionarios)
            const entradaTerciaria = readline.question('1-Continuar\n2-Sair\n');
            switch (entradaTerciaria) {
                case "1":
                    console.log('====================================');
                    console.log("Continuando");
                    console.log('====================================');
                    break;
                case "2":

                    return
            }
        default: console.log("Opção Invalida!!!")
            break;
    }
}