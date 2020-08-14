// import { Cliente } from "./Cliente.js"; vesão 13

const Cliente = require("./Cliente");

const ContaCorrente = require("./ContaCorrente");

const cliente = new Cliente("Gabriel", "47878663890");

const conta = new ContaCorrente(cliente, 1000);

conta.teste();

console.log(conta);

let = a = 1;

console.log(a);

throw new Error("Gabriel Gameleira é o brabo!");