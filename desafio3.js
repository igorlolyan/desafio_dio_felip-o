let valorBruto = 5500.00
let adicional = 250
let salario

if (valorBruto >= 0 && valorBruto <= 1100.00) {
    let imposto = valorBruto * 0.05
    valorBruto -= imposto
}

    else if (valorBruto >= 1100.01 && valorBruto <= 2500.00) {
    let imposto = valorBruto * 0.10
    valorBruto -= imposto
}

    else if (valorBruto > 2500.00) {
    let imposto = valorBruto * 0.15
    valorBruto -= imposto
}

salario = valorBruto + adicional

console.log(salario)