const Conta = require("./Conta.js");

module.exports = class ContaPoupanca extends Conta {

    static _numerocontas = 0;

    constructor() {

        ContaPoupanca._numerocontas++;

    }

}