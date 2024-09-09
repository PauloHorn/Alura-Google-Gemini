function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");

    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tag = "";

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    campoPesquisa = campoPesquisa.toLowerCase();

    if (campoPesquisa == "" || campoPesquisa == " ") {
        resultados = `
                <div class="item-resultado">
                    <p class="descricao-meta">Digite um nome.</p>
                </div>
                    `;
        
                    section.innerHTML = resultados;
                    return
    } else {
        for (let dado of dados) {
            titulo = dado.titulo.toLowerCase();
            descricao = dado.descricao.toLowerCase();
            tag = dado.tags.toLowerCase();

        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tag.includes(campoPesquisa)) {
            resultados += `
                <div class="item-resultado">
                    <h2>
                        <a href="#" target="_blank">${dado.titulo}</a>
                    </h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href="https://pt.wikipedia.org/wiki/Rayssa_Leal" target="_blank">${dado.link}</a>
                </div>
                        `
        };
    }
    } 
 
    if (!resultados) {
        resultados = `
                <div class="item-resultado">
                    <p class="descricao-meta">Digite um nome ou termo válido.</p>
                </div>
                    `;
        
                    section.innerHTML = resultados;
    }
section.innerHTML = resultados;
}
