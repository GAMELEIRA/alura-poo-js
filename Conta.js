module.exports = class Conta {

    //static contador = 0;
    constructor(agencia, saldo, cliente) {

        this._agencia = agencia;

        this._saldo = saldo;

        this._cliente = cliente;

    }

    teste() {
        console.log("Estou sendo testado!");
    }

    sacar(saque) {

        if (this._saldo >= saque) {

            this._saldo -= saque;

        } else {

            console.log("Operação negada");

        }

    }

    depositar(valor) {

        if (valor > 0) {

            this._saldo += valor;

        } else {

            return null;

        }

    }

    //instanceof

    transferir() {}


}