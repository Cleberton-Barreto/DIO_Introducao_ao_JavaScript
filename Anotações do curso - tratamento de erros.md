### Debugging e Error Handling

#### Tipos de erros

1. Apresentar o objeto Error do ECMAScript
2. Apresentar a DOMException



#### ECMAScript Error

​	Erros que ocorrem em tempo de execução, e ele pode ser composto por mensagem, nome, linha e call stack

![alt text](/c:/Documents/Dev/Git/DIO/DIO_Introducao_ao_JavaScript/img/ecmaError.png)



#### DOMException Error

​	São erros relacionados ao Document Obejct Model (DOM), ou seja, erros que estão acontecendo dentro da sua arvore DOM no qual você pode estar tentando usar uma função ou elemento que não pode ser usado ou invocado em outro lugar.

![alt text](/c:/Documents/Dev/Git/DIO/DIO_Introducao_ao_JavaScript/img/domException.png)

 

#### Tratando erros 

1. Explicar a difernça entre ***"throw"*** e ***"return"***;
2. Apresentar a implementação da declaração ***"try/catch"*** e ***"finally"***;



#### Return

​	Conforme vemos na imagem abaixo, a diferença é que o ***return*** vai tratar a nossa declaração como uma string, já o ***throw*** vai trata-la como um erro de fato e vai nos retornar o problema.

![alt text](/c:/Documents/Dev/Git/DIO/DIO_Introducao_ao_JavaScript/img/throw.png)



#### Throw

![alt text](/c:/Documents/Dev/Git/DIO/DIO_Introducao_ao_JavaScript/img/throw1.png)



#### Try...catch

​	Como podemos ver, usando o mesmo exemplo anterior nós criamos uma nova função que vai verificar se o nosso código acima está correto, e vemos ao lado que ele possui algum problema já que o retorno gerou a mensagem (String inválida).

*Exemplo de try...catch com console.log(e)*;

![alt text](/c:/Documents/Dev/Git/DIO/DIO_Introducao_ao_JavaScript/img/tryCatch.png)



*Exemplo de try...catch com throw(e)*;

![alt text](/c:/Documents/Dev/Git/DIO/DIO_Introducao_ao_JavaScript/img/tryCatch1.png)



#### Finally

​	Não é obrigatório usar o *finally*, a função dele é dar algum retorno sobre a execução realizada do *try...catch*, independente do resultado, ele irá executar.



*Exemplo com chamada de função vazia;*

![alt text](/c:/Documents/Dev/Git/DIO/DIO_Introducao_ao_JavaScript/img/finally.png)



*Exemplo com chamada de função preenchida;*

![alt text](/c:/Documents/Dev/Git/DIO/DIO_Introducao_ao_JavaScript/img/finally1.png)



#### Criando erro personalizado;

1. Manipulando o objeto (Sintaxe);

![alt text](/c:/Documents/Dev/Git/DIO/DIO_Introducao_ao_JavaScript/img/error.png)

*OBS:* em alguns browsers os parâmetros *"fileName"* e *"lineNumber"* podem não ser reconhecidos, a recomendação é procurar a documentação e ler sobre.



2. Podemos dar nome à nossa constante;

![alt text](/c:/Documents/Dev/Git/DIO/DIO_Introducao_ao_JavaScript/img/error1.png)

![alt text](/c:/Documents/Dev/Git/DIO/DIO_Introducao_ao_JavaScript/img/error2.png)

Nesta imagem do console temos as seguintes informações;

* MeuErro.name :arrow_right: O nome que demos à nossa constante
* MeuErro.stack :arrow_right: A mensagem inteira mostrando nome, erro e linha onde ocorreu, nesse exemplo o erro ocorreu na linha 3 na coluna 17 (*at < anonymous >:3;17*)