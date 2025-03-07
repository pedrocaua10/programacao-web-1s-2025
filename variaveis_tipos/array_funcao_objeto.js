let num_A = 2.47;
let num_B = 3.14;
let num_C;

const operacoes = ["adição", "subtração", "multiplicação", "divisão"];

function imprimirResultado(operando1, operando2, resultado, operacao){
    console.log(`Resultado da ${operacao} entre ${operando1} e ${operando2} é ${resultado}`);
}

num_C = num_A + num_B;
//imprimirResultado(num_A, num_B, num_C, operacoes[0]);
num_C = num_A - num_B;
//imprimirResultado(num_A, num_B, num_C, operacoes[1]);
num_C = num_A * num_B;
//imprimirResultado(num_A, num_B, num_C, operacoes[2]);
num_C = num_A / num_B;
//imprimirResultado(num_A, num_B, num_C, operacoes[3]);

/*
    1 2 3
    4 5 6
    7 8 9
*/

let matriz = [ 
    [1, 2, 3, 11], 
    [4, 5, 6, 1111],
    [111, 7, 8, 9],
    [true, false, null, undefined], 
];

function imprimirMatriz(A){
    for(let i = 0; i < A.length; i++){
        let linhaMatriz = "";
        for(let j = 0; j < A[i].length; j++){
            linhaMatriz += A[i][j] + "\t";
        }
        console.log(linhaMatriz);
    }
}

//imprimirMatriz(matriz);


let capitais = {
    DF: "Brasília",
    DDD_DF: 61,
    SP: "São Paulo",
    DDD_SP: 11,
    RJ: "Rio de Janeiro",
    DDD_RJ: 21
};

for (const key in capitais) {
    //console.log(key + "-" + capitais[key]);    
}

function verificarNumeroPar(n){
    if(n % 2 == 0){
        return true;
    }
    return false;
}

console.log(verificarNumeroPar(3));
console.log(verificarNumeroPar(6));