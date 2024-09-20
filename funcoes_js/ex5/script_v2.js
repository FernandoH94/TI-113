/*Crie um algoritmo que leia 20 números inteiros e armazene-os num vetor. 
Armazene os números pares no vetor PAR e os números IMPARES no vetor impar. 
Deve-se no final mostrar os três vetores.*/

function lerNumeros() {

    let listaNumeros = [];
    //Leitura de Numeros e Inserindo no Lista de Números
    for (let i = 0; i < 10; i++) {
        let numeroString = prompt("Informe um Número:");
        let numero = parseInt(numeroString);
        listaNumeros.push(numero);
    }

    return listaNumeros;

}

function guardarParesImpares(lista) {

    //Processar os pares e impares
    for (let j = 0; j < lista.length; j++) {
        //Pega o valor corrente do vetor de números
        let numeroAgora = lista[j];
        //Verifica se ePar == true ou false
        let ehPar = ((numeroAgora % 2) == 0);
        if (ehPar) {
            listaPares.push(numeroAgora);
        } else {
            listaImpares.push(numeroAgora);
        }
    }
}

function mostrarVetor(vetor) {
    let mensagem = "";
    for (let k = 0; k < vetor.length; k++) {
        let ultimaPosicao = (vetor.length - 1);
        if (k == ultimaPosicao) {
            mensagem += vetor[k] + ".";
        }
        else {
            mensagem += vetor[k] + ", ";
        }
    }
    return mensagem;
}
//faço a chamada da função de leitura de numeros: nessa função o vetor fica declarado na função e devolve a lista cheia.
let listaPrincipal = lerNumeros();

let listaPares = [];
let listaImpares = [];

//faço a chamada da função que insere os numeros da listaPrincipal na lista de par ou impar
guardarParesImpares(listaPrincipal);

// faço uma chamada a função que pega o conteúdo da listaPrincipal e monto um texto com o conteúdo dela
let textoListaInteira =  "Principal: " + mostrarVetor(listaPrincipal) + "\n";

// faço uma chamada a função que pega o conteúdo da listaPares e monto um texto com o conteúdo dela
let textoPares =  "Pares: " + mostrarVetor(listaPares) + "\n";

// faço uma chamada a função que pega o conteúdo da listaImpares e monto um texto com o conteúdo dela
let textoImpares =  "Impares: " + mostrarVetor(listaImpares);


// junto os conteúdos em uma variavel de texto final para exibir em um alerta só.
let textoFinal = textoListaInteira + textoPares + textoImpares;

alert(textoFinal);
