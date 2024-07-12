const minhaPromise = new Promise ((resolve,reject)=> {
    let sucesso = true;

    if (sucesso)
 {
    resolve ("operação bem sucedida!");

 }else {
    reject("ocorreu um erro");
 }
});

minhaPromise
.then(resultado => {
    console.log(resultado)//Operação bem sucedida
})
.catch(erro => {
    console.error(erro);//Ocorreu erro.
})
.finally(()=> {
    console.log("Operação concluida.");
});
    
const esperar = ms => new Promise(resolve => setTimeout(resolve,ms));
esperar(2000)
.then(()=> console.log("passaram 2 ms."));

esperar(1000)
.then(()=> {
    console.log("passou 1 segundo.");
    return esperar (2000);

})
.then(()=> {
    console.log("passaram -se mais 2 segundos.");
});

Promise.all([esperar(1000), esperar (2000), esperar (3000)])
.then(()=> {
    console.log("todas as promises concluidas.");
});
    
Promise.race([esperar(1000), esperar (2000), esperar (3000)])
.then(()=> {
    console.log("A primeira promise concluida.");
});


