console.log('Olá, mundo!');

let pessoa = {
    nome: "Joao",
    telefone: 6199998877,
    endereco: "Brasília - DF"
};

console.log(pessoa);

function alterarNomeSeForJoao(pessoa){
    if(pessoa.nome == "Joao"){
        pessoa.nome = "Pedro";
    }
}

alterarNomeSeForJoao(pessoa);
console.log(pessoa);