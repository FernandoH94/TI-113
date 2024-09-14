/* Ex5: Crie um algoritmo usando funções que leia até 50 números inteiros e armazene-os numa lista de números, considere as premissas abaixo:

• Não pode informar letras, palavras ou vazio. Alerte-o do erro e repita a leitura.
• Não pode informar números negativos. Alerte-o do erro e repita a leitura.
• Crie um menu que o usuário escolha cadastrar 5, 15, 25 ou 50.
• Ao final do cadastro ele tem um outro menu pra escolher exibir:  1 - A lista cadastrada, 2- somente os pares, 3- somente os impares.
*/

function lerNumero() {
    let num = prompt("Digite um número inteiro positivo:");
    let numero = parseInt(num);
    while (isNaN(numero) || numero < 0) {
        alert("Entrada inválida. Digite um número inteiro positivo.");
        num = prompt("Digite um número inteiro positivo:");
        numero = parseInt(num);
    }
    return numero;
} 

function preencherLista(qtd) {
    let lista = [];
    for (let i = 0; i < qtd; i++) {
        lista.push(lerNumero());
    }
    return lista;
} 

function exibirListaCompleta(lista) {
    return "Lista cadastrada: " + lista.join(", ");
}
 
function exibirPares(lista) {
    let pares = lista.filter(num => num % 2 === 0);
    return "Números pares: " + pares.join(", ");
}
 
function exibirImpares(lista) {
    let impares = lista.filter(num => num % 2 !== 0);
    return "Números ímpares: " + impares.join(", ");
}
 
function menu() {
    let opcao = parseInt(prompt("Escolha a quantidade de números a cadastrar:\n1. 5\n2. 15\n3. 25\n4. 50"));
 
    let qtd;
    switch (opcao) {
        case 1:
            qtd = 5;
            break;
        case 2:
            qtd = 15;
            break;
        case 3:
            qtd = 25;
            break;
        case 4:
            qtd = 50;
            break;
        default:
            alert("Opção inválida. Tente novamente.");
            return menu();
    }
 
    let lista = preencherLista(qtd);
 
    let acao = parseInt(prompt("Escolha uma opção para exibir a lista:\n1. A lista cadastrada\n2. Somente os pares\n3. Somente os ímpares"));
 
    let resultado;
    switch (acao) {
        case 1:
            resultado = exibirListaCompleta(lista);
            break;
        case 2:
            resultado = exibirPares(lista);
            break;
        case 3:
            resultado = exibirImpares(lista);
            break;
        default:
            alert("Opção inválida. Tente novamente.");
            return menu();
    }
 
    alert(resultado);
}
 
menu();
