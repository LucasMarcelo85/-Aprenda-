


// em JavaScript é usado para iterar sobre um array 
// e modificar seus elementos usando uma função de callback. 
// Ele cria um novo array com os resultados dessas chamadas



const Arr = [3, 4, 5, 6];

// Usando o .map() para multiplicar cada elemento por 3
const mudarArr = Arr.map(function(multiplicar) {
    return multiplicar * 3;
});

console.log(mudarArr); // Resultado: [9, 12, 15, 18]


//  usuario = [
//     { nome: "Marcelo", sobrenome: "Souza" },
//     { nome: "Daniel", sobrenome: "Lobo" },
//     { nome: "JMarnei", sobrenome: "Cardoso" }
// ];
// // Para obter um array com os nomes completos, use o .map() assim:
// const nomecompleto = usuario.map(function(juntar) {
//     return `${(juntar).nome} ${(juntar).sobrenome}`;
// });


// console.log(nomecompleto)



