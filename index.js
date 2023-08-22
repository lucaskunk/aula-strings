// Exercícios de interpretação de código
/*
1-

let array
console.log('a. ', array) // undefined

array = null
console.log('b. ', array) // null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) //11

let i = 0
console.log('d. ', array[i])//3

array[i+1] = 19
console.log('e. ', array) // [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const valor = array[i+6]
console.log('f. ', valor)//9

2-

const frase = prompt("Digite uma frase")
console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)// SUBI NUM ÔNIBUS EM MIRROCOS 27

*/

//Exercícios de escrita de código
//1-

//const nomeUsuario = prompt("Qual é o seu nome?:")
//const email = prompt("Digite seu email:")
//console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o),  ${nomeUsuario} !´)


//2-
//let listaComida = ["cafe", "pizza", "sushi", "xis bacon", "açai"]
//console.log(listaComida)
//console.log("Essas são as minhas comidas preferidas:", listaComida)

//const comidaFavorita = prompt("Qual é a sua comida favorita")
//listaComida[1] = comidaFavorita
//console.log(listaComida)

//3-

let listaDeTarefas = []


const tarefa1 = prompt("Digite uma tarefa para realizar no dia:")
const tarefa2 = prompt("Digite uma segunda tarefa para realizar no dia:")
const tarefa3 = prompt("Digite uma tercera tarefa para realizar no dia:")

listaDeTarefas.push(tarefa1)
listaDeTarefas.push(tarefa2)
listaDeTarefas.push(tarefa3)


console.log(listaDeTarefas)

tarefaRealizada = prompt("Digite o indice de uma tarefa realizada (0, 1 ou 2):")
listaDeTarefas.splice(tarefaRealizada, 1)
console.log(listaDeTarefas)
