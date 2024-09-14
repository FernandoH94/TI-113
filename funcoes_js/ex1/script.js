/* Ex1: Crie uma função que lê um vetor de 5 números inteiros e mostre-os, considere que o 
usuário não pode informar letras, palavras ou vazio. Alerte-o do erro e repita a leitura caso ocorra.
*/

function listaNum() {
    const num = [];
    let i = 0;

    while (i < 5) {
        const entrada = prompt(`Digite o número ${i + 1}: `);


        if (entrada === null) {
            alert('Entrada cancelada.');
            break;
        }

        const valor = entrada.trim();

        if (valor === '' || isNaN(valor) || !Number.isInteger(parseFloat(valor))) {            
            alert('Entrada inválida. Por favor, digite um número: ');
        
        } else {            
            num.push(parseInt(valor, 10));
            i++;
        
        }
    }
    
    if (num.length > 0) {         
        alert(`Os números informados são: ${num.join(', ')}`);
    
    } else {        
        alert('Nenhum número foi informado.');
        
    }
}

listaNum();