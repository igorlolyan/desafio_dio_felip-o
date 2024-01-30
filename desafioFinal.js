class nossoPersonagem {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar () {
        let ataque

        if(this.tipo === 'Mago') {
            ataque = 'magia'
        }
        else if (this.tipo === 'Guerreiro') {
            ataque = 'espada'
        }
        else if (this.tipo === 'Monge') {
            ataque = 'artes marciais'
        }
        else if (this.tipo === 'Ninja') {
            ataque = 'shuriken'
        }
        console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`)
    }
}


const heroi = new nossoPersonagem('Mário', 33, 'Mago')

const vilão = new nossoPersonagem('Bowser', 50, 'Guerreiro')

heroi.atacar();

vilão.atacar();