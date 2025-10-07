function listarLogs() {
    // Pega os logs armazenados no localStorage. Se não houver logs, cria uma lista vazia.
    let logs = JSON.parse(localStorage.getItem('logs')) || [];

    // Mostra no console os logs carregados para debug
    console.log(logs);

    // Seleciona o elemento UL onde os logs serão exibidos
    let listaLogs = document.querySelector("#lista-logs")

    listItems = ""

    // Loop para percorrer cada log na lista de logs
    for (let log of logs) {
        // Adiciona um item de lista para cada log
        // O ícone de olho (remove_red_eye) chama a função montarLogs ao ser clicado, passando a URL do log
        listItems += `
        <li class="collection-item">
          Busquei no(a) ${log.tipo} na URL ${log.url} em ${log.data}
          <a onclick="montarLogs('${log.url}')" class="waves-effect waves-light">
            <i class="material-icons left">remove_red_eye</i>
          </a>
        </li>
        `
    }

    // Insere todos os itens gerados dentro do UL selecionado
    listaLogs.innerHTML = listItems;
}
