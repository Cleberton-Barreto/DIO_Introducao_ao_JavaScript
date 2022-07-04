# Módulos em JavaScript :bookmark:



### Objetivos do curso

1. Explicar o que são os módulos em JavaScript
2. Ensinar como ultilizar esses módulos
3. Alertar para algumas particularidades



### O que são módulos

​	Módulos são arquivos JavaScript que tem a capacidade de ***exportar*** e ***importar*** informações de ***outros arquivos*** do mesmo tipo.

![alt text](/c:/Documents/Dev/Git/DIO/DIO_Introducao_ao_JavaScript/img/modulos.png)

**Algumas vantagens são:** 

* Organização do código;
* Compartilhamento de variáveis em escopos diferentes;
* Explicita as dependências dos arquivos;



### Exportar

*Named exports:*

![alt text](/c:/Documents/Dev/Git/DIO/DIO_Introducao_ao_JavaScript/img/exportar.png)



*Default exports:*

* Só pode haver um por arquivo;
* Será o retorno padrão do seu arquivo;

![alt text](/c:/Documents/Dev/Git/DIO/DIO_Introducao_ao_JavaScript/img/exportar1.png)



### Importar

*Named exports:*

![alt text](/c:/Documents/Dev/Git/DIO/DIO_Introducao_ao_JavaScript/img/exportar2.png)



*Trocando nome de imports:*

![alt text](/c:/Documents/Dev/Git/DIO/DIO_Introducao_ao_JavaScript/img/exportar3.png)



*Importando todos os dados de um arquivo:*

![alt text](/c:/Documents/Dev/Git/DIO/DIO_Introducao_ao_JavaScript/img/exportar4.png)



### Vinculando ao HTML

​	Para fazer testes localmente (de um arquivo no seu computador), será necessário estar rodando um servidor. Isso pode ser feito utilizando a extensão "Live server", do VSCode.

![alt text](/c:/Documents/Dev/Git/DIO/DIO_Introducao_ao_JavaScript/img/html.png)



**Outras curiosidades**

* Módulos sempre estão em "strict mode";
* Podem ser utilizadas as extensões ***.js*** e ***.mjs***;
* Para testes locais, é necessário utilizar um servidor;
* Ao importar, sempre lembre das extensões ***(.js, .mjs)***;
* Ao importar, sempre utilize **./** como ponto de partida;

![alt text](/c:/Documents/Dev/Git/DIO/DIO_Introducao_ao_JavaScript/img/html1.png)

