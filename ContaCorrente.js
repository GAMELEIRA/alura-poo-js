module.exports = class ContaCorrente {

    //static contador = 0;

    agencia;

    _saldo = 0;

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

    set e() {


    }

    //instanceof

    transferir() {}


}