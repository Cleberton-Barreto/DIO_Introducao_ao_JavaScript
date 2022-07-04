# Entendendo o DOM (Document object model) :bookmark:



### Manipulando o DOM

1. Explicar o que é o DOM;
2. Explicar a diferença entre DOM e BOM;



### O que é o DOM

​	O DOM HTML é um padrão de como acessar e modificar os elementos HTML de uma página.

![alt text](/c:/Documents/Dev/Git/DIO/DIO_Introducao_ao_JavaScript/img/dom.png)

### DOM vs BOM

​	O BOM (browser object model), tudo o que está dentro do obejto window.

![alt text](/c:/Documents/Dev/Git/DIO/DIO_Introducao_ao_JavaScript/img/bom.png)



### Selecionando elementos

1. Apresentar a estrutura HTML;
2. Apresentar métodos para interagir com os elementos de uma página;



**Métodos (estrutura HTML)**

![alt text](/c:/Documents/Dev/Git/DIO/DIO_Introducao_ao_JavaScript/img/dom1.png)



**Selecionando os elementos de uma página**

![alt text](/c:/Documents/Dev/Git/DIO/DIO_Introducao_ao_JavaScript/img/dom2.png)

![alt text](/c:/Documents/Dev/Git/DIO/DIO_Introducao_ao_JavaScript/img/dom3.png)



**Adicionar e Deletar**

![alt text](/c:/Documents/Dev/Git/DIO/DIO_Introducao_ao_JavaScript/img/dom4.png)



### Trabalhando com estilos

1. Ensinar como manipular estilos de elementos HTML



**Classes** 

*Element.classList*

![alt text](/c:/Documents/Dev/Git/DIO/DIO_Introducao_ao_JavaScript/img/element.png)

resultado do código acima;

![alt text](/c:/Documents/Dev/Git/DIO/DIO_Introducao_ao_JavaScript/img/element1.png)



**Acessando diretamente o CSS de um elemento**

![alt text](/c:/Documents/Dev/Git/DIO/DIO_Introducao_ao_JavaScript/img/element2.png)





### Eventos

1. Explicar o que são eventos;
2. Apresentar eventos comumente utilizados;
3. Ensinar como acionar estes eventos;



**Tipos**

*Eventos do mouse;* 

***mouseover, mouseout :arrow_right:*** Cria uma animação quando colocamos o mouse em cima.



*Eventos de clique;*

***click, dbclick :arrow_right:*** Cria uma animação quando clicarmos em algo e dando duplo "click" ativamos o "dbclick" que gera uma outra animação.



*Eventos de atualização;*

***Change, load :arrow_right:*** Cria uma animação quando a página carrega (por exemplo), ou quando preenchemos algum campo e etc.



**Acionando esses eventos**

​	Diretamente no JavaScript, criar um evento que vai ser acionado no momento em que o usuário realizar determinada ação.

![alt text](/c:/Documents/Dev/Git/DIO/DIO_Introducao_ao_JavaScript/img/eventos.png)



​	Especificando a função a ser chamada diretamente no elemento HTML.

![alt text](/c:/Documents/Dev/Git/DIO/DIO_Introducao_ao_JavaScript/img/eventos1.png)

