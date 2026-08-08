function consultarCashback() {
  const nome = document.getElementById("nomeCliente").value.trim().toLowerCase();
  const resultado = document.getElementById("resultado");
  if (!nome) { resultado.textContent = "Digite um nome."; return; }
  if (clientes[nome] !== undefined) {
    resultado.innerHTML = "<strong>Cliente encontrado!</strong><br>Cashback disponível: R$ " +
      clientes[nome].toFixed(2).replace(".", ",");
  } else {
    resultado.textContent = "Cliente não encontrado.";
  }
}