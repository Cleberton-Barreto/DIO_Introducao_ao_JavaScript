# Introdução ao JavaScript :coffee:



### Objetivo do curso

​	Entender o que é JavaScript, suas aplicações na vida real e conhecer o mercado de trabalho. Introduzir os principais operadores para manipular valores no seu código.

* **Aula1 -** O que é JavaScript?
  1. Entender a história da linguagem 
  2. Conhecer as pricipais evoluções
  3. Conhecer aplicações na vida real
* **Aula2 -** Recursos básicos da linguagem
* **Aula3 -** Console
* **Aula4 -** JavaScript numa página da WEB.
* **Aula5 -** Atividade Prática
* **Aula6 -** Frameworks e mercado de trabalho.



#### História resumida

​	É uma linguagem interpretada, ou seja, ela acontece em tempo real sem a necessidade de um compilador, baseada em protótipos, é multiparadigma, comumente utilizada em aplicações web client-side, ou seja, é a linguagem que os brownser's atuais entendem e que torna possível a interação com o usuário, além de seguir com o padrão ECMAScript que define as normas e padrões de uso do JavaScript. 

### Aplicações:

* Web
* Mobile
* Smartwatches
* Games
* Internet of Things
* APIs


### Frameworks e Bibliotecas

* **VueJS** 
* **Angular** 
* **React** 
* **jQuery** 



### Sintaxe e Operadores

1. **Tipos de operadores** 

   - **Aritimética** 

     **+** 	Adição

     **-** 	Subtração

     ***** 	Multiplicação

     ****** 	Exponenciação

     **/** 	Divisão

     **%**	Resto da Divisão

     **++** 	Incrementar

     **--** 	Decrementar

     ​

   - **Atribuição**

     Exp:  

     X **=** Y  estamos dizendo que X terá o valor Y e quando chamado, mostrará Y

     X **=** X + Y ou X **+=** Y desta forma estamos executando uma operação matemática, no exemplo, uma soma onde, X recebe o valor dele mesmo + Y que pode ser representado desta forma.  

     ​

   - **Comparação**

     **==** 		igual à (mesmo valor)

     **===** 	igual à (mesmo valor e tipo)

     **!=** 		Diferente (mesmo valor)

     **!==** 		Diferente (mesmo valor e tipo)

     **>** 		maior que

     **<**		menor que

     **>=** 		maior e igual

     **<=** 		menor e igual

     ​

   - **Lógica**

     **&&** 		"e" lógico

     **||** 		"ou" lógico

     **!**		"não" lógico

     ​

   - **Condicional** 

     O famoso **if** **eslse** que por sua vez, possui sua forma ternária sendo representa ddestas duas formas abaixo:

     EXP:

     **if** **(** Se condição for verdadeira **)**

     ​	**{** execute essa expressão 

     **}** **else** se for falsa **{** 

     ​	execute essa expressão

     **}** **;**

     ou

     **(** Se condição for verdadeira **)** **?** execute essa expressão **:** se não, execute essa expressão



### Tipos de Variáveis

**var -** Indicado para ser usado em escopo global dentro de um código.

- Pode redeclarar, pode reatribuir e pode usar hoisting

**let -** Pode ser usado em escopo global, mas a boa prática  e por questões de segurança é muito aconselhavel usar sempre esse, seja dentro de um **if else**,  **function** e etc.

- Não pode redeclarar, pode reatribuir e não pode usar hoisting

**const -** São declaradas em SNAKE_CASE_UPPER_CASE, escopo de block e não faz hoisting (hoisting e vc declarar uma variável antes mesmo de atribuir um valor à ela. WTF).

EXP:

* const DAYS_IN_A_WEEK = 7;
* const MY_NAME = "Kieran";
* Não pode redeclarar, não pode reatribuir e pode não usar hoisting



### Atribuição de valores

* Original Variable as String 		=	some awesome var
* Camel Case        =       someAwesomeVar
* Snake Case        =        some_awesome_var
* Kebab Case        =       some-awesome-var
* Pascal Case        =        SomeAwesomeVar
* Upper Case Snake Case      =      SOME_AWESOME_VAR




### Estruturas de dados



​	JavaScript é uma linguagem de tipagem dinâmica. Ou seja, antes de declarar um valor, você não precisa especificar o tipo dele.

EXP:

​	Quando declaramos uma variável e atribuímos um valor a ela, esse valor é de algum tipo, pode ser uma String,  Number, Object e etc. 

​	No exemplo abaixo nós vamos declarar uma variável chamada **um** e vamos atribuir o valor dela com valor **um** também, mas vamos perguntar ao Java qual o tipo desse valor;

​	**let** um = "um"

​	**typeof** um				![Alt text](/c:/Documents/Dev/Git/Dio/DIO_Introducao_ao_JavaScript/img/typeof_string.png)

​	resultado :arrow_right: ''string''

​	Perceba que ele retorna o tipo da nossa variável, não o valor que foi declarado, mas se fizermos de outra forma, vejamos o que acontece;

​	**let** um = 1

​	**typeof** um					![alt text](/c:/Documents/Dev/Git/Dio/DIO_Introducao_ao_JavaScript/img/typeof_number.png)

​	resultado :arrow_right: number



