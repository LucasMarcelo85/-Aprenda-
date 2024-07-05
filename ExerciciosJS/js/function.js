// ===== FUNCTION =====

// const valor1 = Number(prompt("Informe o valor"));
// const valor2 = Number(prompt("Informe o valor"));

// Hoinsting (eleveção, acessar mesmo antes da declaração)
// somarValores();

// ===== Function Nomeada (SEM parâmetros) =====



function somarValores() {
    const valor1 = Number(prompt("Informe o valor"));
    const valor2 = Number(prompt("Informe o valor"));
    // const soma = valor1 + valor2;
    // return soma;
    return valor1 + valor2;
}

const resultado = somarValores();
console.log(`Resultado: ${resultado}`);




// console.log(`Resultado: ${somarValores()}`);

// document.getElementById('container').innerText = `<h3>Resultado: ${somarValores()}</h3>`;
// document.getElementById('container').innerHTML = `<h3>Resultado: ${somarValores()}</h3>`;

// Exemplo simples de criação de elemento HTML (DOM)
// const h3 = document.createElement('h3');
// h3.innerHTML = `Resultado: ${somarValores()}`;
// document.getElementById('container').appendChild(h3);


// ===== Function Nomeada (COM parâmetros) =====
// function somarValores(n1, n2) {
//     const soma = n1 + n2;
//     return soma;
// }

// const resultado = somarValores(valor1, valor2);
// console.log(`Resultado: ${resultado}`);


