let nomePersonagem = 'Mario';
let xpPersonagem = 'a';
let nivel = '';

if (typeof xpPersonagem === 'number') {
  switch (true) {
    case xpPersonagem <= 1000:
      nivel = 'Ferro';
      break;
    case xpPersonagem <= 2000:
      nivel = 'Bronze';
      break;
    case xpPersonagem <= 5000:
      nivel = 'Prata';
      break;
    case xpPersonagem <= 7000:
      nivel = 'Ouro';
      break;
    case xpPersonagem <= 8000:
      nivel = 'Platina';
      break;
    case xpPersonagem <= 9000:
      nivel = 'Ascendente';
      break;
    case xpPersonagem <= 10000:
      nivel = 'Imortal';
      break;
    default:
      nivel = 'Radiante';
      break;
  }
  console.log(`O Herói de nome ${nomePersonagem} está no nível de ${nivel}`);
} else {
  console.log('O xpPersonagem tem que ser um número');
}