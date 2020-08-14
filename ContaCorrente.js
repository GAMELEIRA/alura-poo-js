const Conta = require("./Conta.js");

module.exports = class ContaCorrente extends Conta {

    static _numerocontas = 0;

    constructor(cliente, agencia) {

        super(agencia, 0, agencia);

        ContaCorrente._numerocontas++;

    }

    teste() {
        console.log("Estou sendo rebelde");
    }

}