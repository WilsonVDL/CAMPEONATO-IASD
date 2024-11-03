
const urlCsv = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTTYEgtm5FsCQDN57jYmIIYs0njmTvjtx45IvHX5q_BngfvPO8xdzzwWsgVQy9N9MHHzZhryIMzNJMS/pub?gid=460691208&single=true&output=csv';


async function carregarDadosDaPlanilha() {
    try {
        const resposta = await fetch(urlCsv);
        const texto = await resposta.text();
        const linhas = processarCsv(texto);
        exibirDadosNaTabela(linhas);
    } catch (erro) {
        console.error("Erro ao carregar dados da planilha:", erro);
    }
}


function processarCsv(texto) {
    const linhas = texto.split('\n').map(linha => linha.split(','));
    return linhas;
}


function exibirDadosNaTabela(linhas) {
    const corpoTabela = document.querySelector("#tabela-classificacao tbody");
    corpoTabela.innerHTML = "";

    linhas.forEach(linha => {
        const tr = document.createElement("tr");
        linha.forEach(celula => {
            const td = document.createElement("td");
            td.textContent = celula;
            tr.appendChild(td);
        });
        corpoTabela.appendChild(tr);
    });
}


carregarDadosDaPlanilha();
