let saldoVitorias = calculadoraRank(100, 10)
let nivel = ''

switch (true) {
    case saldoVitorias <= 10:
        nivel = 'Ferro'
            break;

    case saldoVitorias <= 20:
        nivel = 'Bronze'
            break;
            
    case saldoVitorias <= 50:
        nivel = 'Prata'
            break;

    case saldoVitorias <=80:
        nivel = 'Ouro'
            break;

    case saldoVitorias <= 90:
        nivel = 'Diamante'
            break;

    case saldoVitorias <= 100:
        nivel = 'Lendário'
            break;

    default:
        nivel = 'Imortal'
            break;

}

console.log(`O Herói tem um saldo positivo de ${saldoVitorias} vitórias e está no nível de ${nivel}`)

function calculadoraRank (vitorias, derrotas) {
    let saldo = vitorias - derrotas

    return saldo
}