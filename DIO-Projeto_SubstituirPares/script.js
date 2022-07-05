/*Atividade 2
Troque todos os elementos pares e diferentes de zero de um array pelo número 0. Se o array for vazio, retorne -1.

Exemplo: Input -> [1, 3, 4, 6, 80, 33, 23, 90]

Output -> [1, 3, 0, 0, 0, 33, 23, 0]

Input -> []

Output -> -1*/


function substituirPares(array) {
	if (!array.length) return console.log(-1)
	if (!array) return console.log(-1)

	const Par = (num) => num % 2 === 0
	const Zero = (num) => num !== 0

	for (let i = 0; i < array.length; i++) {
		if (Par(array[i]) && Zero(array[i])) {
			console.log(`trocando ${array[i]} por 0...`)
			array[i] = 0
		}
	}
	console.log(array)
}
substituirPares([1, 3, 4, 6, 80, 33, 23, 90])