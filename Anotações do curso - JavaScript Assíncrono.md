### JavaScript Assíncrono

1. Explicar o conceito de assincronicidade;
2. Apresentar Promises;
3. Ensinar como fazer requisições de *APIs*;



**Assincronicidade**

* Explicar o que são Promises;
* Ensinar como manipulá-las;
* Apresentar as palavras-chave ***"async"*** e ***"await"***;



**Definição**

​	Assíncrono é tudo aquilo que não ocorre ou não se efetiva ao mesmo tempo. 

​	O JavaScript roda de maneira ***síncrona***.

![alt text](/c:/Documents/Dev/Git/DIO/DIO_Introducao_ao_JavaScript/img/assincrono.png)



**Promises**

​	Objeto de processamento assíncrono. 

​	Inicialmente, seu valor é desconhecido. Ela pode, então, ser **resolvida** ou **rejeitada**.

![alt text](/c:/Documents/Dev/Git/DIO/DIO_Introducao_ao_JavaScript/img/promises.png)



​	A promises pode ter 3 estados - ***(1)Pending  (2)fulfilled  (3)Rejected***

![alt text](/c:/Documents/Dev/Git/DIO/DIO_Introducao_ao_JavaScript/img/promises1.png)



**Syntaxe**

![alt text](/c:/Documents/Dev/Git/DIO/DIO_Introducao_ao_JavaScript/img/promises2.png)

![alt text](/c:/Documents/Dev/Git/DIO/DIO_Introducao_ao_JavaScript/img/promises3.png)



**Async e Await**

​	São funções assíncronas e precisam dessas duas palavras chave.

![alt text](/c:/Documents/Dev/Git/DIO/DIO_Introducao_ao_JavaScript/img/async-await.png)

​	Funções assíncronas também retornam Promises.

![alt text](/c:/Documents/Dev/Git/DIO/DIO_Introducao_ao_JavaScript/img/async-await1.png)

​	Utilizando ***try...catch*** 

![alt text](/c:/Documents/Dev/Git/DIO/DIO_Introducao_ao_JavaScript/img/async-await2.png)



### Consumindo ***APIs***

1. Explicar o que são *APIs*;
2. Ensinar como lidar com requisições dessas *APIs*;
3. Apresentar o método fetch();



​	*APIs (Application Programming Interface)* - Uma API é uma forma de intermediar os resultados do back-end com o que é apresentado no front-end.

​	Você consegue acessá-la por meio de URLs.

![alt text](/c:/Documents/Dev/Git/DIO/DIO_Introducao_ao_JavaScript/img/apis.png)

***JSON - (JavaScript Object Notation)***

​	É muito 	comum que APIs retornem seus dados no formato .jason, portanto precisamos tratar esses dados quando os recebermos.

![alt text](/c:/Documents/Dev/Git/DIO/DIO_Introducao_ao_JavaScript/img/json.png)



***Método fetch()***

![alt text](/c:/Documents/Dev/Git/DIO/DIO_Introducao_ao_JavaScript/img/fetch.png)

​	Consumindo APIs - Operações no banco (POST, GET, PUT, DELETE e etc)

![alt text](/c:/Documents/Dev/Git/DIO/DIO_Introducao_ao_JavaScript/img/fetch1.png)

