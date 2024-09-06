function pesquisar() {
    let section = document.getElementById("resultados-pesquisa")

let resultados = "";

for (let dado of dados) {
    resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}.</p>
                <a href="https://pt.wikipedia.org/wiki/Rayssa_Leal" target="_blank">${dado.link}</a>
            </div>
`
};

section.innerHTML = resultados;
}
