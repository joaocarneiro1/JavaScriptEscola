// JavaScript ou JS � uma linguagem de programa��o interpretada estruturada, com um grande nivel de tipagem din�mica fraca e multiparadigma.
// Juntamente com HTML e CSS, o JavaScript � uma das tr�s principais tecnologias da World Wide Web.
// JavaScript permite p�ginas da Web interativas e, portanto, � uma parte essencial dos aplicativos da web.

													// Tipos de declara��es //

var //Declara uma vari�vel, opcionalmente, inicializando-a com um valor.

let //Declara uma vari�vel local de escopo do bloco, opcionalmente, inicializando-a com um valor.

const //Declara uma constante de escopo de bloco, apenas de leitura.
													
													
													// TIPOS DE DADOS //

var int = 5; //numeros inteiros
var float = 144.006; //numeros com v�rgulas
var string = "BrunoMachado"; //� um tipo de dado para representar textos
var char = "b"//� tipo string mas s� representa um caracter
var valorBooleano= true; //verdadeiro
var valorBooleano= false; //falso
var obj = {nome:['Bruno', 'Machado'],
};

var cores = ['Azul', 'Amarelo'];
									//criar array
console.log(cores.length);

var mensagem = "Ol� Mundo";// Vari�vel Local
mensagem = "Ol� Mundo";// Vari�vel Global

var valornull= null; //v�riavel nula
var valornull="";

var indefenida; //v�riavel indefenida

													// Operadores //


//Operadores aritm�ticos

//Operadores l�gicos0

//Operadores relacionais

https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators#operadores_logicos



													// Formas de comentar c�digo //

//barra dupla: serve para comentar uma linha de c�digo.

/* Ou com este coment�rio 
serve para comentar
v�rias linhas */


													//Regras de variaveis JavaScript//

/*Um identificador JavaScript deve come�ar com uma letra, sublinhado (_), ou cifr�o ($); 
caracteres subsequentes podem tamb�m ser d�gitos (0-9). Como o JavaScript � sens�vel a mai�sculas, as letras incluem 
os caracteres de "A" at� "Z" (mai�sculas) e os caracteres de "a" at� "z" (min�sculas).

A partir do JavaScript 1.5 � poss�vel usar letras em ISO 8859-1 ou Unicode tais como � e � nos identificadores. 
Tamb�m � poss�vel usar as Sequ�ncias de escape em Unicode \uXXXX como caracteres nos identificadores.

Alguns exemplos de nomes poss�veis s�o: Number_hits, temp99 e _name.*/

												
												   //Regras de constantes JavaScript//

/*As regras de escopo para constantes s�o as mesmas que as das vari�veis, exceto que a palavra chave const � sempre necess�ria, mesmo para constantes globais.
Se uma palavra chave � omitida, o identificador � assumido como uma vari�vel.*/