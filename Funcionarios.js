let Funcionarios = [{
    nome: "João da Silva",
    salarioFixo: 15000.89,
    comissao: 150,
   get salarioTotal (){
       return (this.salarioFixo+(this.comissao*0.15));
   }
},
{
    nome: "Jubiskleyton Gékison",
    salarioFixo: 3590.89,
    comissao: 170,
   get salarioTotal (){
       return (this.salarioFixo+(this.comissao*0.15));
   }
},
{
    nome: "Fulano de Tal Albuquerque",
    salarioFixo: 9590.89,
    comissao: 950,
   get salarioTotal (){
       return (this.salarioFixo+(this.comissao*0.15));
   }
},
{
    nome: "Zé Ninguém",
    salarioFixo: 5590.89,
    comissao: 1250,
   get salarioTotal (){
       return (this.salarioFixo+(this.comissao*0.15));
   }
},
{
    nome: "Johnnie Doe",
    salarioFixo: 1590.89,
    comissao: 150,
   get salarioTotal (){
       return (this.salarioFixo+(this.comissao*0.15));
   }
}
]
module.exports = Funcionarios
