//DOM => Document Object Model

//Comentário em uma linha

/*
    Comentário em
    duas linhas 
    ou mais
*/

/**
 * Operadores Matemáticos
 * + => Soma
 * - => Subtração
 * / => Divisão
 * * => Multiplicação
 * % => Operador de Módulo => Tarefa de casa
 */


/*
    Declarando Variáveis
*/
// let primeiroValor = 10;
// let segundoValor = 5;
// let resultado = primeiroValor + segundoValor;

/*
    Declarando Constantes
 */
// const terceiroValor = 3;

/*
    Tipo de Dados

    integer => Number => Numéricos => 10, 15, 20 -5, 0
    String => Palavras/textos => "Victor" 'Kenzie Academy' `Nicholas`
    Boolean => Booleano:
        1 = SIM/TRUE/VERDADE/LIGADO/EXISTE
        0 = NÃO/FALSE/FALSO/DESLIGADO/INEXISTENTE
 */

/*
    Operadores Lógicos

    Operadores Simples
    === Identico    => Avalia se os valores são iguais e do mesmo tipo
    ==  Igualdade   => Avalia se os valores são iguais
    <   Menor que
    >   Maior que
    !=  Diferente   => Avalia se os valores são diferentes
    !== Não identico=> Avalia se os valores são diferentes e os tipos também

    Operadores Compostos
    <= Menor ou igual
    >= Maior ou igual
 */

/*
    Estrutura Condicional
 */

//SE (isso aqui for verdade) {executo o bloco de código}
//SENÃO SE (isso aqui for verdade) {executo o bloco de código}
//SENÃO {se tudo for mentira executo o bloco de código}
// let idade = 16;
// let maiorDeIdade = idade >= 18; //false

// if (maiorDeIdade) {          //false
//     console.log("Eu posso tirar a CNH");
// } else if (idade == 17) {
//     console.log("Eu posso tirar a CNH");
// } else {
//     console.log("Não posso tirar a CNH");
// }

/*
    Operadores Lógicos - Parte 2
    
    && => E
        TRUE && TRUE    => TRUE
        FALSE && TRUE   => FALSE
        TRUE && FALSE   => FALSE
        FALSE && FALSE  => FALSE

    || => OU
        TRUE || TRUE    => TRUE
        TRUE || FALSE   => TRUE
        FALSE|| TRUE    => TRUE
        FALSE|| FALSE   => FALSE
 */
//18 anos já pode tirar CNH
//16 a 17 anos pode tirar CNH, mas precisa ser monitorado
//abaixo de 16 não pode tirar CNH
// let idade = 16;

// if (idade >= 18) {
//     console.log("Já pode tirar a CNH");
// } else if (idade == 15 || idade == 16 || idade == 17) {
//     console.log("Já pode tirar a CNH, mas precisa ser monitorado");
// } else {
//     console.log("Não pode tirar a CNH");
// }


/*
    FUNÇÃO
 */
//FUNCTION                => Palavra chave pra declarar a função
//NOME DA FUNÇÃO          => churros, batata
//ARGUMENTOS/PARAMETROS   => (valor1, valor2, teste, churros, batata)
// function somarValores(primeiroValor, segundoValor) {
//     const resultado = primeiroValor + segundoValor;

//     return resultado;
// }

// let resultado = somarValores(10, 5);
// let resultado2 = somarValores(resultado, 3);
// console.log(resultado2)

/*
    ESTRUTURA DE REPETIÇÃO/LOOPS
 */

//for(inicialização;condição;incremento) {Bloco de código à ser repetido}
const qtdVezesParaRepetir = 30;

for (let contador = 0; contador < qtdVezesParaRepetir; contador = contador + 1) {
    console.log("Esse item, está na promoção");
}






