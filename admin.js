const nomes=["Richard","Pietro Noal","Rafael Fama","Victor Lehry","Miguel Tolentino","Enzo Momberg","Daniel Marinelli"];
const padrao={empresa:"Agência Mainha",frase:"O Ceará te espera",sobre:"Conheça a Agência Mainha.",pacote:"",destino:"",preco:0,descricao:"",cashback:Object.fromEntries(nomes.map(n=>[n,0]))};

function carregar(){
 const d=JSON.parse(localStorage.getItem("agenciaMainhaDados")||"null")||padrao;
 for(const id of ["empresa","frase","sobre","pacote","destino","preco","descricao"]) document.getElementById(id).value=d[id]??"";
 const caixa=document.getElementById("clientes"); caixa.innerHTML="";
 nomes.forEach(n=>caixa.insertAdjacentHTML("beforeend",`<label>${n}<input class="campo cashback" data-nome="${n}" type="number" min="0" step="0.01" value="${d.cashback?.[n]??0}"></label>`));
}
function salvar(){
 const d={};
 for(const id of ["empresa","frase","sobre","pacote","destino","preco","descricao"]) d[id]=document.getElementById(id).value;
 d.preco=Number(d.preco)||0; d.cashback={};
 document.querySelectorAll(".cashback").forEach(x=>d.cashback[x.dataset.nome]=Number(x.value)||0);
 localStorage.setItem("agenciaMainhaDados",JSON.stringify(d));
 document.getElementById("status").textContent="Salvo neste navegador.";
}
function restaurar(){localStorage.removeItem("agenciaMainhaDados");carregar();document.getElementById("status").textContent="Restaurado."}
carregar();