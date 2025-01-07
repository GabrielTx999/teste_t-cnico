// Referências aos elementos do formulário e da nota fiscal
const form = document.getElementById("nota-fiscal-form");
const notaFiscalDiv = document.getElementById("nota-fiscal");
const detalhes = document.getElementById("detalhes");
const calculoImpostos = document.getElementById("calculo-impostos");
const valorTotal = document.getElementById("valor-total");
const gerarNotaBtn = document.getElementById("gerarNota");

// Função para calcular os impostos e exibir a nota fiscal
gerarNotaBtn.addEventListener("click", () => {
  // Obtendo os valores dos campos
  const valorVenda = parseFloat(document.getElementById("valorVenda").value);
  const itens = document.getElementById("itens").value;
  const irpf = parseFloat(document.getElementById("irpf").value);
  const pis = parseFloat(document.getElementById("pis").value);
  const cofins = parseFloat(document.getElementById("cofins").value);
  const inss = parseFloat(document.getElementById("inss").value);
  const issqn = parseFloat(document.getElementById("issqn").value);

  // Verificando se os campos estão preenchidos
  if (isNaN(valorVenda) || !itens || isNaN(irpf) || isNaN(pis) || isNaN(cofins) || isNaN(inss) || isNaN(issqn)) {
    alert("Por favor, preencha todos os campos corretamente!");
    return;
  }

  // Cálculo dos impostos
  const valorIRPF = (valorVenda * irpf) / 100;
  const valorPIS = (valorVenda * pis) / 100;
  const valorCOFINS = (valorVenda * cofins) / 100;
  const valorINSS = (valorVenda * inss) / 100;
  const valorISSQN = (valorVenda * issqn) / 100;

  const totalImpostos = valorIRPF + valorPIS + valorCOFINS + valorINSS + valorISSQN;

  // Gerando os detalhes da nota fiscal
  detalhes.innerHTML = `
    <strong>Itens Vendidos:</strong> ${itens}<br>
    <strong>Valor da Venda:</strong> R$ ${valorVenda.toFixed(2)}
  `;

  calculoImpostos.innerHTML = `
    <strong>Impostos Calculados:</strong><br>
    IRPF: R$ ${valorIRPF.toFixed(2)}<br>
    PIS: R$ ${valorPIS.toFixed(2)}<br>
    COFINS: R$ ${valorCOFINS.toFixed(2)}<br>
    INSS: R$ ${valorINSS.toFixed(2)}<br>
    ISSQN: R$ ${valorISSQN.toFixed(2)}<br>
    <strong>Total de Impostos:</strong> R$ ${totalImpostos.toFixed(2)}
  `;

  valorTotal.innerHTML = `
    <strong>Valor Líquido:</strong> R$ ${(valorVenda - totalImpostos).toFixed(2)}
  `;

  // Exibindo a nota fiscal
  notaFiscalDiv.style.display = "block";
});
