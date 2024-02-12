let listaDeNumerosSorteador = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroALeatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, "Brazilian Portuguese Female", { rate: 1.2 });
}

function exibirMensagemInicial() {
  exibirTextoNaTela("h1", "Jogo do número secreto");
  exibirTextoNaTela("p", "Escolha um número entre 1 e 10");
}

exibirMensagemInicial();

function verificarChute() {
  let chute = document.querySelector("input").value;

  if (chute == numeroSecreto) {
    exibirTextoNaTela("h1", "Acertou!");
    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
    let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
    exibirTextoNaTela("p", mensagemTentativas);
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (chute > numeroSecreto) {
      exibirTextoNaTela("p", "O número secreto é menor");
    } else {
      exibirTextoNaTela("p", "O número secreto é maior");
    }
    tentativas++;
    limparCampo();
  }
}

function gerarNumeroALeatorio() {
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeDeElementosNaLista = listaDeNumerosSorteador.length;

  if (quantidadeDeElementosNaLista == numeroLimite) {
    listaDeNumerosSorteador = [];
  }

  if (listaDeNumerosSorteador.includes(numeroEscolhido)) {
    return gerarNumeroALeatorio();
  } else {
    listaDeNumerosSorteador.push(numeroEscolhido);
    return numeroEscolhido;
  }
}

function limparCampo() {
  chute = document.querySelector("input");
  chute.value = "";
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroALeatorio();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById("reiniciar").setAttribute("disabled", true);
}

/* Desafios 

function saudacao() {
  console.log("Olá, mundo!");
}

saudacao();

function saudacaoNome(nome) {
  console.log(`Olá, ${nome}`);
}

saudacaoNome("Guilherme");

function dobro(numero) {
  return numero * 2;
}

let resultadoDobro = dobro(12);
console.log(resultadoDobro);


function calcularMedia(a, b, c) {
  return (a + b + c) / 3;
}
 
let media = calcularMedia(3, 6, 9);
console.log(media);

function encontrarMaiorNumero(a, b) {
  return a > b ? a : b;
}

let maiorNumero = encontrarMaiorNumero(11, 18);
console.log(maiorNumero);

function quadrado(numero) {
  return numero * numero;
}

let resultado = quadrado(45);
console.log(resultado); 



function calcularIMC(peso, altura) {
  let IMC = peso / (altura * altura);
  return IMC;
}

console.log(calcularIMC(75, 1.75));

function calcularFatorial(fatorial) {
  let numero = 1;
  for (let i = fatorial; i > 1; i--) {
    numero *= i;
  }
  return numero;
}

console.log(calcularFatorial(5));

function converterEmReais(valor) {
  let dolar = 4.8;
  return valor * dolar;
}

console.log(converterEmReais(25));

function retangulo(altura, largura) {
  let areaRetangulo = altura * largura;
  let perimetroRetangulo = 2 * (altura + largura);
  return alert(`A área deste retângulo é ${areaRetangulo}, e o seu perímetro é ${perimetroRetangulo}
   `);
}

retangulo(25, 12);

function circulo(raio) {
  let pi = 3.14;
  let areaCirculo = pi * (raio * raio);
  let perimetroCirculo = 2 * pi * raio;

  return alert(
    `A área deste círculo é ${areaCirculo}, e o seu perimetro é ${perimetroCirculo}`
  );
}

circulo(16);

function tabuada(numero) {
  for (let contador = 1; contador <= 10; contador++) {
    alert(`${numero} x ${contador} = ${numero * contador}`);
  }
}

tabuada(9);


let listaGenerica = [];
let linguagensDeProgramacao = ["Javascript", "C", "C++", "Kotlin", "Python"];
linguagensDeProgramacao.push("Java", "Ruby", "GoLang");

let nomes = ["Pedro", "Thiago", "João"];
console.log(nomes[0]);
console.log(nomes[1]);
console.log(nomes[2]);

*/
