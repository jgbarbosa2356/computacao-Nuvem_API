function montarLogs(url) {

    // Divide a URL em partes usando a barra '/' como separador
    let params = url.split("/")
    console.log(params) // Mostra cada parte da URL no console

    // ===================== CASO CEP =====================
    if (params.length == 7) { // Se a URL tiver 7 partes, consideramos que é uma busca por CEP

        // Simula o clique na aba do CEP para ativá-la
        document.querySelector("#cep-link").click()

        // Pega o CEP da URL (posição 4 do array) e preenche o input
        document.querySelector("#cep").value = params[4]

        // Chama a função de busca do CEP automaticamente
        buscaCepFetch()

    } else { 

        // Simula o clique na aba da RUA para ativá-la
        document.querySelector("#rua-link").click()

        // Preenche o select de estado com a parte 4 da URL
        document.querySelector("#estado").value = params[4]

        // Preenche o input de rua com a parte 6 da URL
        document.querySelector("#rua").value = params[6]
        
        // ===================== DELAY PARA CIDADES =====================
        setTimeout(() => {
            pegarCidades() // Atualiza a lista de cidades com base no estado selecionado
        }, 500) 

        // ===================== DELAY PARA CIDADE E BUSCA =====================
        setTimeout(() => {
            document.querySelector("#cidade").value = params[5] // Preenche a cidade
            buscaRua() // Executa a busca de rua automaticamente
        }, 1000) 
    }
}
