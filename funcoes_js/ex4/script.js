/* Ex4: Crie um algoritmo usando funções que tenha um cadastro de nomes e salários bruto de até 50 pessoas, há um menu
e continuação ou parada do cadastro e na parada final, mostre os nomes, salários brutos e os
salários líquidos de todos que foram lidos, considerando 10% de INSS a descontar.
  */


function calcularSalarioLiquido(salario) {
    const descontoINSS = 0.10; // 10%
    return salario - (salario * descontoINSS);
}


function cadastrar() {
    let cadastro = [];
    let continuarCadastro = true;

    while (continuarCadastro && cadastro.length < 50) {
        let nome = prompt("Digite o nome da pessoa:");
        let salarioBruto = parseFloat(prompt("Digite o salário bruto da pessoa:"));
                
        if (nome.trim() === "" || isNaN(salarioBruto) || salarioBruto < 0) {
            alert("Entrada inválida. Por favor, insira um nome válido e um salário bruto não negativo.");
            continue;
        }

        
        cadastro.push({ nome, salarioBruto });        
        continuarCadastro = confirm("Deseja cadastrar outra pessoa?");
    }

    
    let resultado = "Cadastro Completo:\n";
        resultado += "Nome: | Salário Bruto: | Salário com desconto do INSS: \n"
    
    cadastro.forEach(({ nome, salarioBruto }) => {
        let salarioLiquido = calcularSalarioLiquido(salarioBruto);
        resultado += `Nome: ${nome} | R$ ${salarioBruto.toFixed(2)} | R$ ${salarioLiquido.toFixed(2)}\n`;
    });

    alert(resultado);
}

cadastrar();
