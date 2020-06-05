// JavaScript ou JS é uma linguagem de programação interpretada estruturada, com um grande nivel de tipagem dinâmica fraca e multiparadigma.
// Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.
// JavaScript permite páginas da Web interativas e, portanto, é uma parte essencial dos aplicativos da web.

													// Tipos de declarações //

var //Declara uma variável, opcionalmente, inicializando-a com um valor.

let //Declara uma variável local de escopo do bloco, opcionalmente, inicializando-a com um valor.

const //Declara uma constante de escopo de bloco, apenas de leitura.
													
													
													// TIPOS DE DADOS //

var int = 5; //numeros inteiros
var float = 144.006; //numeros com vírgulas
var string = "BrunoMachado"; //é um tipo de dado para representar textos
var char = "b"//é tipo string mas só representa um caracter
var valorBooleano= true; //verdadeiro
var valorBooleano= false; //falso
var obj = {nome:['Bruno', 'Machado'],
};

var cores = ['Azul', 'Amarelo'];
									//criar array
console.log(cores.length);

var mensagem = "Olá Mundo";// Variável Local
mensagem = "Olá Mundo";// Variável Global

var valornull= null; //váriavel nula
var valornull="";

var indefenida; //váriavel indefenida

													// Operadores //


//Operadores aritméticos

//Operadores lógicos0

//Operadores relacionais

https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators#operadores_logicos



													// Formas de comentar código //

//barra dupla: serve para comentar uma linha de código.

/* Ou com este comentário 
serve para comentar
várias linhas */


													//Regras de variaveis JavaScript//

/*Um identificador JavaScript deve começar com uma letra, sublinhado (_), ou cifrão ($); 
caracteres subsequentes podem também ser dígitos (0-9). Como o JavaScript é sensível a maiúsculas, as letras incluem 
os caracteres de "A" até "Z" (maiúsculas) e os caracteres de "a" até "z" (minúsculas).

A partir do JavaScript 1.5 é possível usar letras em ISO 8859-1 ou Unicode tais como å e ü nos identificadores. 
Também é possível usar as Sequências de escape em Unicode \uXXXX como caracteres nos identificadores.

Alguns exemplos de nomes possíveis são: Number_hits, temp99 e _name.*/

												
												   //Regras de constantes JavaScript//

/*As regras de escopo para constantes são as mesmas que as das variáveis, exceto que a palavra chave const é sempre necessária, mesmo para constantes globais.
Se uma palavra chave é omitida, o identificador é assumido como uma variável.*/