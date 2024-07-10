function promptNum(message, nullable = false) {
    const input = Number(prompt(message))
    if (nullable && !input)
        return null
    if (!Number(input)) {
        alert("Entrada inválida! Digite um número")
        promptNum(message)
    }
    return input
}


function agua(){
    let A = 2, B = 3, C = 6
    result = ((A + B))
    if(result < C){
        console.log(result + " é menor que " + C)
    }else{
        console.log("Não é menor")
    }
}

function benta(){
    let A = 2, B = 2
    var C 
    if(A == B){    
    console.log((A + B));
    C = A+B
        console.log(C + " É o resultado")
    }else{
        console.log((A*B));
       C = A*B
       console.log(C + ' é o resultado')
    }
}

function madeira(){
    let A = 11
    console.log("apartir do número " + A + " é correto afirmar que "  + (A - 1)+ ' é seu antecessor ' + (A + 1) + ' é seu sucessor!')
}

function pele(){
let a = prompt("Escreva o valor do seu sálario!")    
alert("Você ganha o equivalente a " + a/1293.20 + ", você ganha isso!?" )

}

function jogo(){
    alert("Desafio: Faça um algoritmo que leia três valores inteiros diferentes e imprima na tela os valores em ordem decrescente.")

    const nums = [
        promptNum("Digite o primeiro número"),
        promptNum("Digite o segundo número"),
        promptNum("Digite o terceiro número")
    ]

    

    alert("Números em ordem decrescente: "+ nums.sort((a, b) => b - a))
}

jogo()

function lala(){
    let peso = 66.4;
    let altura = 1.72;
    let imc = peso / (altura ** 2);
    let condicao;
    if (imc < 18.5) {
        condicao = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc <= 24.9) {
        condicao = 'Peso ideal (parabéns)';
    } else if (imc >= 25.0 && imc <= 29.9) {
        condicao = 'Levemente acima do peso';
    } else if (imc >= 30.0 && imc <= 34.9) {
        condicao = 'Obesidade grau I';
    } else if (imc >= 35.0 && imc <= 39.9) {
        condicao = 'Obesidade grau II (severa)';
    } else {
        condicao = 'Obesidade grau III (mórbida)';
    }
    
    
    console.log("Seu IMC é " + imc)
}

function abela(){
    let nota1 = 7.8;
let nota2 = 6.5;
let nota3 = 9.2;
let media = (nota1 + nota2 + nota3) / 3;
console.log('A média das notas vai ser: '+ media );

}

function capela(){
    let nome = "Maria";
let nota1 = 8.5;
let nota2 = 7.2;
let nota3 = 6.8;
let nota4 = 9.0;


let media = (nota1 + nota2 + nota3 + nota4) / 4;


let situacao;
if (media >= 7.0) {
    situacao = 'Aprovado';
} else {
    situacao = 'Reprovado';
}


console.log('Aluno: ' + nome);
console.log('Média das notas: '+ media);
console.log('Situação: '+ situacao);

}