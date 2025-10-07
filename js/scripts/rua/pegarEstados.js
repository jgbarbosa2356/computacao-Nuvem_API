function pegarEstados() { 

  // Seleciona o elemento <select> onde os estados serão inseridos
  let selectEstado = document.querySelector("#estado") 

  // URL da API do IBGE para pegar todos os estados
  let urlEstado = "https://servicodados.ibge.gov.br/api/v1/localidades/estados" 

  // Faz a requisição à API usando fetch
  fetch(urlEstado) 
    .then((res) => { 
      // Converte a resposta para JSON
      return res.json() 
    }) 
    .then((estados) => { 
      // Recebe o array de estados já convertido para JSON

      // Cria a option padrão do select (desabilitada e selecionada)
      let estadosList = '<option value="" disabled selected>Escolha um Estado</option>'

      // Loop para criar uma <option> para cada estado retornado
      for (let i = 0; i < estados.length; i++) { 
        estadosList += `<option value="${estados[i].sigla}">${estados[i].nome}</option>`
      }

      // Insere todas as options dentro do select de estados
      selectEstado.innerHTML = estadosList 
    })
}

// Chama a função para que os estados já apareçam ao carregar a página
pegarEstados()
