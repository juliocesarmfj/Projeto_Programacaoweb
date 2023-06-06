function calcularTotal() {
  // Obter os valores de quantidade dos produtos
  var quantidadeProduto01 = parseInt(
    document.getElementById("quantidade-produto01").value
  );
  var quantidadeProduto02 = parseInt(
    document.getElementById("quantidade-produto02").value
  );
  var quantidadeProduto03 = parseInt(
    document.getElementById("quantidade-produto03").value
  );
  var quantidadeProduto04 = parseInt(
    document.getElementById("quantidade-produto04").value
  );
  var quantidadeProduto05 = parseInt(
    document.getElementById("quantidade-produto05").value
  );

  // Obter os preços dos produtos
  var precoProduto01 = parseFloat(
    document.getElementById("preco-produto01").innerText
  );
  var precoProduto02 = parseFloat(
    document.getElementById("preco-produto02").innerText
  );
  var precoProduto03 = parseFloat(
    document.getElementById("preco-produto03").innerText
  );
  var precoProduto04 = parseFloat(
    document.getElementById("preco-produto04").innerText
  );
  var precoProduto05 = parseFloat(
    document.getElementById("preco-produto05").innerText
  );

  // Calcular o total para cada produto
  var totalProduto01 = quantidadeProduto01 * precoProduto01;
  var totalProduto02 = quantidadeProduto02 * precoProduto02;
  var totalProduto03 = quantidadeProduto03 * precoProduto03;
  var totalProduto04 = quantidadeProduto04 * precoProduto04;
  var totalProduto05 = quantidadeProduto05 * precoProduto05;

  // Exibir os totais na tabela
  document.getElementById("total-produto01").innerText =
    totalProduto01.toFixed(2);
  document.getElementById("total-produto02").innerText =
    totalProduto02.toFixed(2);
  document.getElementById("total-produto03").innerText =
    totalProduto03.toFixed(2);
  document.getElementById("total-produto04").innerText =
    totalProduto04.toFixed(2);
  document.getElementById("total-produto05").innerText =
    totalProduto05.toFixed(2);

  // Calcular o valor total
  var valorTotal =
    totalProduto01 +
    totalProduto02 +
    totalProduto03 +
    totalProduto04 +
    totalProduto05;
}
function exibirValorTotal() {
  // Obter os valores de quantidade dos produtos
  var quantidadeProduto01 = parseInt(document.getElementById("quantidade-produto01").value);
  var quantidadeProduto02 = parseInt(document.getElementById("quantidade-produto02").value);
  var quantidadeProduto03 = parseInt(document.getElementById("quantidade-produto03").value);
  var quantidadeProduto04 = parseInt(document.getElementById("quantidade-produto04").value);
  var quantidadeProduto05 = parseInt(document.getElementById("quantidade-produto05").value);

  // Obter os preços dos produtos
  var precoProduto01 = parseFloat(document.getElementById("preco-produto01").innerText);
  var precoProduto02 = parseFloat(document.getElementById("preco-produto02").innerText);
  var precoProduto03 = parseFloat(document.getElementById("preco-produto03").innerText);
  var precoProduto04 = parseFloat(document.getElementById("preco-produto04").innerText);
  var precoProduto05 = parseFloat(document.getElementById("preco-produto05").innerText);

  // Calcular o total para cada produto
  var totalProduto01 = quantidadeProduto01 * precoProduto01;
  var totalProduto02 = quantidadeProduto02 * precoProduto02;
  var totalProduto03 = quantidadeProduto03 * precoProduto03;
  var totalProduto04 = quantidadeProduto04 * precoProduto04;
  var totalProduto05 = quantidadeProduto05 * precoProduto05;

  // Calcular o valor total
  var valorTotal = totalProduto01 + totalProduto02 + totalProduto03 + totalProduto04 + totalProduto05;

  // Exibir o valor total em um alerta
  document.getElementById("valor-total").innerText = "Valor Total: R$" + valorTotal.toFixed(2);
}
