module.exports = class Cliente {

    constructor(nome, cpf) {

        this._nome = nome;

        this._cpf = cpf;

    }

    get nome() {

        return this._nome;

    }

    set nome(nome) {

        return this._nome = nome;

    }


    get cpf() {

        return this._cpf;

    }

    set cpf(cpf) {

        return this._cpf = cpf;

    }

    get contaCorrente() {

        return this._contaCorrente;

    }

    set contaCorrente(contaCorrente) {

        return this._contaCorrente = contaCorrente;

    }

}