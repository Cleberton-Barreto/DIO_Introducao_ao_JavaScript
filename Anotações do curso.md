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

![alt text](/c:/Documents/Dev/Git/Dio/DIO_Introducao_ao_JavaScript/img/tipos_de_dados.png)



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



#### Strings

​	Comumente utilizadas para textos, seus valores podem ser declarados entre aspas simples, compostas ou em crases. A declaração em crases facilita muito nossa vida na elaboração do nosso código, conforme exemplo na ultima linha da imagem abaixo;   

![alt text](/c:/Documents/Dev/Git/Dio/DIO_Introducao_ao_JavaScript/img/strings.png)

​	

#### Numbers

​	Esses também são simples pois só há 2 tipos, números inteiros(reais) ou números decimais(float, ou flutuantes) conforme exemplo abaixo;

**Inteiros :arrow_right:** 0 - 1 - 2 - 3 - 4 - 5 - 6 - 7 - 8 - 9

**Decimais :arrow_right:** 1.5 - 2.8 - 4 - 6 - 20.3 e etc.

​	Perceba que números **inteiros** não podem ter números **flutuantes**, mas números **flutuantes** podem ter números **inteiros** em sua composição.

 

#### Booleans

​	Números boleanos, que retornam **verdadeiro**( True) ou **falso**(False), não tem muito o que falar sobre, mas podem ser usados como parâmetro para tomadas de decições.



#### Arrays

​	Arrays ou Vetores, possuem essas duas nomeclaturas. São listas iteráveis de elementos, ou seja, podemos ter uma lista e dentro desta lista ter diversos elementos, como textos e números, e podemos acessar essas informações de viversas formas, conforme imagem abaixo;

![alt text](/c:/Documents/Dev/Git/Dio/DIO_Introducao_ao_JavaScript/img/arrays.png)  



**Comandos úteis de manipulação de listas**

​	Neste exemplo vamos imaginar que declaramos a variável **Array** vazia, e vamos inserir alguns dados, remover alguns dados entre outras coisas, para isso, podemos usar os seguintes métodos abaixo;

* **Array.push() :arrow_right:** Nos permite adicionar um elemento no final da nossa array.
* **Array.pop() :arrow_right:** Nos permite remover o ultimo elemento da nossa array.
* **Array.shift() :arrow_right:** Nos permite remover o primeiro elemento da nossa array.
* **Array.unshift() :arrow_right:** Nos permite adicionar um elemento no início da nossa array.
* **Array.sort() :arrow_right:** Nos permite colocar em ordem a nossa array.
* **Array.includes() :arrow_right:** Nos permite saber se existe algum elemento específico dentra da nossa array.
* **Array.every(item => item === 5) :arrow_right:** Nos permite saber se todos os elementos são iguais ao elemento que definimos como **5**, vai retornar um valor booleano (True ou False).
* **Array.some(item => item === 5) :arrow_right:** Nos permite saber se algum elemento dentro da nossa array possui esse mesmo valor, também vai nos retornar um valor booleano (True ou Flase).
* **Array.reverse() :arrow_right:** Nos permite mudar a odem, mostra todos os elementos da nossa array de trás para frente.


#### Objetos

​	É parecido com as arrays, porém ela trabalha com chaves e valores e da para fazer muitas coisas com esse tipo de estrutura, vejamos algumas.

![alt text](/c:/Documents/Dev/Git/Dio/DIO_Introducao_ao_JavaScript/img/objeto.png)

​	Neste exemplo vamos imaginar que declaramos a variável **obj** vazia, e vamos inserir alguns dados e ver como eles se comportam;

**Inserindo um valor à nossa key**

![alt text](/c:/Documents/Dev/Git/Dio/DIO_Introducao_ao_JavaScript/img/nome_sobrenome.png)

​	O **nome** é considerado uma chave(**Key**) dentro de um objeto e seu atributo é um valor(**values**). Caso queira deletar uma propriedade dentro deste objeto, podemos fazer da seguinte forma;

**Deletando uma propriedade**

![alt text](/c:/Documents/Dev/Git/Dio/DIO_Introducao_ao_JavaScript/img/delete_obj.png)

​	Perceba que tinhamos duas keys (**name** e **nome**) e deletamos a chave **name**. E como fazemos para inserir vários valores à uma única key ? Veja na imagem abaixo;

**Inserindo vários valores em uma key**

![alt text](/c:/Documents/Dev/Git/Dio/DIO_Introducao_ao_JavaScript/img/array_de_objeto.png)

​	E como fazemos para ler esses dados de formas dinâmicas ? Tipo, se eu quiser ler só os nomes ou só às idades ? E se eu quiser puxar apenas um atributo desta grande lista ? Veremos na imagem abaixo;

**Pesquisando objetos**

![alt text](/c:/Documents/Dev/Git/Dio/DIO_Introducao_ao_JavaScript/img/pesquisando_objeto.png)



#### Empty / Undefined / null

* **Empty :arrow_right:** É quando a gente declara alguma coisa, porém, não atribui um valor à isso. Por exemplo:

  **Var = " "** // **Obj = { }** // **Array = [ ]** e etc.

* **Null :arrow_right:** É quando queremos que algo não exista ou não funcione propositalmente. 

* **Undefined :arrow_right:** É quando a gente nem declara algo, aquilo que estamos tentando pesquisa não existe de fato.




### Funções 

1. Veremos como declarar funções;
2. Como manipular parâmetros;
3. Apresentar loops e outras declarações;
4. Apresentar o argumento "this";
5. Arrow functions;



#### Estrutura

​	Variáveis criadas dentro de uma função só irão funcionar dentro do seu escopo, se tentarmos chama-la fora da função, ela não vai funcionar.

​	Na imagem abaixo temos uma definição comun de uma **function**

![alt text](/c:/Documents/Dev/Git/Dio/DIO_Introducao_ao_JavaScript/img/estrutura_funcao.png)

​	Na imagem abaixo, temos a mesma estrutura de **function** só que agora com o elemento **return** que vai parar de executar nossa função naquele exato ponto.

![alt text](/c:/Documents/Dev/Git/Dio/DIO_Introducao_ao_JavaScript/img/function_return.png)

​	Temos também o caso de **funções anônimas**, são funções que representam expressões e que uma **variável** também pode armazenar essas funções, conforme escopo na imagem abaixo.

![alt text](/c:/Documents/Dev/Git/Dio/DIO_Introducao_ao_JavaScript/img/funcao_anonima.png)

​	Temos também a **Função autoinvocável** que é uma função invocada dentro de parênteses, seguida por outro par de parênteses, que representa sua chamada, conforme escopos nas imagens abaixo.

![alt text](/c:/Documents/Dev/Git/Dio/DIO_Introducao_ao_JavaScript/img/funcao_autoinvocavel.png)

 ![alt text](/c:/Documents/Dev/Git/Dio/DIO_Introducao_ao_JavaScript/img/funcao_autoinvocavel2.png)



#### Callbacks

​	É uma função passada como argumento para outra função. Utilizando callbacks, você tem maior controle da ordem de chamadas, conforme escopo na imagem abaixo.

![alt text](/c:/Documents/Dev/Git/Dio/DIO_Introducao_ao_JavaScript/img/funcao_callbacks.png)



#### Valores padrão

​	Antes precisávamos verificar se o número que iriamos receber como parâmetro havia sido definido, e caso não fosse, iriamos atribuir o valor dele por um número de nossa escolha. Com a atualização do ECMA, agora podemos especificar esse valor ao lado do parâmetro com um sinal de igual, que vai nos dizer basicamente quê, se nenhum número foi definido, por padrão ele será o número que escolhemos.	

![alt text](/c:/Documents/Dev/Git/Dio/DIO_Introducao_ao_JavaScript/img/funcao_valores_padrao.png)



#### Objeto **''arguments''**

​	Um array com todos os parâmetros passados quando a função foi invocada, conforme exemplo na imagem abaixo.

![alte text](/c:/Documents/Dev/Git/Dio/DIO_Introducao_ao_JavaScript/img/obj_arguments.png)



#### Arrays

* **Spread:** uma forma de lidar separadamente com elementos. O que era parte de um array se torna um elemento independente apenas por colocar esses pontinhos **(...numbers)**. Conforme imagem abaixo. 

![alt text](/c:/Documents/Dev/Git/Dio/DIO_Introducao_ao_JavaScript/img/array_spread.png)

* **Rest:** combina os argumentos em um array. O que era um elemento independente se torna parte de um array. Conforme imagem abaixo.

  ![alt text](/c:/Documents/Dev/Git/Dio/DIO_Introducao_ao_JavaScript/img/array_rest.png)



#### Objetos (Object Destructuring)

​	Entre chaves **{ }**, podemos filtrar apenas os dados que nos interessam em um objeto. Conforme imagem abaixo.

![alt text](/c:/Documents/Dev/Git/Dio/DIO_Introducao_ao_JavaScript/img/obj_destructuring.png)



#### **if else**

​	Uma das estruturas de verificação mais usadas por desenvolvedores, segue alguns escopos de como podemos usa-las nas imagens abaixo.

![alt text](/c:/Documents/Dev/Git/Dio/DIO_Introducao_ao_JavaScript/img/if_else.png)

![alt text](/c:/Documents/Dev/Git/Dio/DIO_Introducao_ao_JavaScript/img/if_else2.png)



### Switch/case

​	Equivalente a uma comparação de tipo e valor (===), a ultima linha recebe um valor em default que só será apresentado se nenhuma das outras opções forem chamadas, ideal para se precisa comparar muitos valores. 

![alt text](/c:/Documents/Dev/Git/Dio/DIO_Introducao_ao_JavaScript/img/switch_case.png)



#### For ( ;  ; )

​	Usado para dar loops dentro de elementos irteráveis (arrays, strings). Ele tbm possui suas variações como  **For of**, e o **For in**. 

![alt text](/c:/Documents/Dev/Git/Dio/DIO_Introducao_ao_JavaScript/img/for.png)



#### **For in**

​	Usado para dar loops em propriedades enumeráveis de um objeto.

![alt text](/c:/Documents/Dev/Git/Dio/DIO_Introducao_ao_JavaScript/img/for_in.png)



#### For of

​	Usado também para dar loops em estruturas iteráveis como (arrays e strings).

![alt text](/c:/Documents/Dev/Git/Dio/DIO_Introducao_ao_JavaScript/img/for_of.png)



#### While

​	É um método que executa as instruções até que a condição se torne falsa. Conforme exemplo na imagem abaixo.

![alt text](/c:/Documents/Dev/Git/Dio/DIO_Introducao_ao_JavaScript/img/while.png)



#### Do while

​	Também executa as instruções até que a condição se torne falsa. Porém, a primeira execução sempre ocorre. Conforme exemplo na imagem abaixo.

![alt text](/c:/Documents/Dev/Git/Dio/DIO_Introducao_ao_JavaScript/img/do_while.png)



#### This

​	A palavra reservada **this** é uma referência de contexto. No exemplo, this refere-se ao objeto pessoa.

![alt text](/c:/Documents/Dev/Git/Dio/DIO_Introducao_ao_JavaScript/img/this.png)

​	Seu valor pode mudar de acordo com o lugar no código onde foi chamada.

![alt text](/c:/Documents/Dev/Git/Dio/DIO_Introducao_ao_JavaScript/img/this1.png)

![alt text](/c:/Documents/Dev/Git/Dio/DIO_Introducao_ao_JavaScript/img/this2.png)

![alt text](/c:/Documents/Dev/Git/Dio/DIO_Introducao_ao_JavaScript/img/this3.png)

![alt text](/c:/Documents/Dev/Git/Dio/DIO_Introducao_ao_JavaScript/img/this4.png)



#### Call

​	O método **.call** pode ser usado para chamar o **this** conforme os exemplos, na imagem abaixo nós especificamos que o **call** vai chamar o **this.nome**, mas com referência à constante **pessoa** trazendo para nós o nome **Miguel**. 

![alt text](/c:/Documents/Dev/Git/Dio/DIO_Introducao_ao_JavaScript/img/call.png)

​	E na imagem abaixo, usamos o mesmo exemplo, mas com referência à constante **animal** trazendo para nós o nome **Murphy**.

![alt text](/c:/Documents/Dev/Git/Dio/DIO_Introducao_ao_JavaScript/img/call1.png)

​	É possível passar parâmetros para essa função separando-os por vírgula.

![alt text](/c:/Documents/Dev/Git/Dio/DIO_Introducao_ao_JavaScript/img/call2.png)



 #### Apply

​	Possui a mesma funcionalidade do ***call*** conforme exemplos acima, a única diferença é quando passamos parâmetros para nossas funções, no caso do ***apply*** esses parâmetros serão passados dentro de uma ***array***.

![alt text](/c:/Documents/Dev/Git/Dio/DIO_Introducao_ao_JavaScript/img/apply.png)

![alt text](/c:/Documents/Dev/Git/Dio/DIO_Introducao_ao_JavaScript/img/apply1.png)



### Bind

​	Clona a esturtura da função onde é chamada e aplica o valor do objeto passado como parâmetro.

![alt text](/c:/Documents/Dev/Git/Dio/DIO_Introducao_ao_JavaScript/img/bind.png)





### Arrow Functions

​									**Sintaxe**

![alt text](/c:/Documents/Dev/Git/Dio/DIO_Introducao_ao_JavaScript/img/arrow_function.png)



* Caso exista apenas uma linha, pode dispensar as ***chaves{ }*** e o ***return***.
* Caso exista apenas um parâmetro, também pode dispensar as ***chaves{ }***  o ***return*** e os ***parenteses***.

![alt text](/c:/Documents/Dev/Git/Dio/DIO_Introducao_ao_JavaScript/img/arrow_function1.png)

![alt text](/c:/Documents/Dev/Git/Dio/DIO_Introducao_ao_JavaScript/img/arrow_function2.png)



#### Outras restrições (funções)

* ***"this"*** sempre será o objeto global. Métodos ára modificar seu valor não irão funcionar;
* Não existe o objeto ***"arguments"***;
* O constructor (ex: new MeuObjeto()) também não pode ser utilizado.



