
module.exports = class NovoFuncionario {
    constructor(nome, salarioFixo, comissao, salarioTotal) {

        this.nome = nome;
        this.salarioFixo = salarioFixo;;
        this.comissao = comissao;
        this.salarioTotal =  (parseFloat(this.salarioFixo) + parseFloat(this.comissao * 0.15)).toFixed(2);
    }
}

