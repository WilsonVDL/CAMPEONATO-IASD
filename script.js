// Substitua pelo link CSV da sua planilha
const urlCsv = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTTYEgtm5FsCQDN57jYmIIYs0njmTvjtx45IvHX5q_BngfvPO8xdzzwWsgVQy9N9MHHzZhryIMzNJMS/pub?gid=0&single=true&output=csv';

// Função para carregar dados da planilha
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

// Função para processar o CSV
function processarCsv(texto) {
    const linhas = texto.split('\n').map(linha => linha.split(','));
    return linhas;
}

// Função para exibir os dados na tabela HTML
function exibirDadosNaTabela(linhas) {
    const corpoTabela = document.querySelector("#tabela-classificacao tbody");
    corpoTabela.innerHTML = ""; // Limpa o conteúdo anterior

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

// Carrega os dados assim que a página for aberta
carregarDadosDaPlanilha();
