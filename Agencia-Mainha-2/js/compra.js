function calcularCompra() {
  const valor = Math.max(0, Number(document.getElementById("valor").value) || 0);
  const cashback = Math.max(0, Number(document.getElementById("cashback").value) || 0);
  const desconto = Math.min(valor, cashback);
  const total = valor - desconto;
  const pagamento = document.getElementById("pagamento").value;
  document.getElementById("total").innerHTML =
    "<strong>Resumo</strong><br>Valor: R$ " + valor.toFixed(2).replace(".", ",") +
    "<br>Cashback: - R$ " + desconto.toFixed(2).replace(".", ",") +
    "<br><strong>Total: R$ " + total.toFixed(2).replace(".", ",") +
    "</strong><br>Pagamento: " + pagamento;
}