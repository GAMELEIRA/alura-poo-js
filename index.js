// import { Cliente } from "./Cliente.js"; vesão 13

const Cliente = require("./Cliente");

const ContaCorrente = require("./ContaCorrente");

const cliente1 = new Cliente();

cliente1.nome = "Ricardo";

cliente1.cpf = 12345678910;

const cliente2 = new Cliente();

cliente2.nome = "Gabriel";

cliente2.cpf = 12345678910;

const contaCorrenteRicardo = new ContaCorrente();

cliente1.contaCorrente = contaCorrenteRicardo;

contaCorrenteRicardo.saldo = 0;

contaCorrenteRicardo.agencia = 1001;

contaCorrenteRicardo.depositar = 100;

contaCorrenteRicardo.sacar(50);

console.log(cliente1);

console.log(cliente2);

console.log(contaCorrenteRicardo);

const bla = () => { nome: "Gameleira", "" };