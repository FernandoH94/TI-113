/* Ex2: Crie uma função que lê uma lista de 4 notas,
 mostre-as junto com a média no alerta, considerando que o usuário não pode 
informar letras, palavras ou vazio. Alerte-o do erro e repita a leitura das notas caso ocorra.
*/

function notas() {
    const num = [];
    let i = 0;

    while (i < 4) {
        const entrada = prompt(`Digite o número ${i + 1}: `);


        if (entrada === null) {
            alert('Inválido!');
            break;
        }

        const valor = entrada.trim();

        if (valor === '' || isNaN(valor)) {            
            alert('Digite uma NOTA!!! ');
        
        } else {            
            num.push(parseFloat(valor));
            i++;
        
        }
           
    }

    return num;

}


function calcularMedia(notas) {
    const quantidadeNotas = notas.length;
    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i]
    }
    let media = soma/quantidadeNotas;
    return media;
} 

let listaNotas = notas();
let resultado = calcularMedia(listaNotas);
alert(`Notas Informadas: ${listaNotas.join(", ")}
        Média: ${resultado}`);

