function pegarCidades() {

  // Pega o valor do estado selecionado no select #estado
  uf = document.querySelector("#estado").value

  // Seleciona o elemento select onde as cidades serão inseridas
  selectCidade = document.querySelector("#cidade")

  // Monta a URL da API do IBGE para pegar os municípios do estado selecionado
  let urlCidades = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios` 

  // Faz a requisição para a API do IBGE
  fetch(urlCidades) 
    .then((res) => { 
      // Converte a resposta para JSON
      return res.json() 
    }) 
    .then((cidades) => { 
      // Recebe o array de cidades já convertido para JSON

      // Cria a opção padrão do select (desabilitada e selecionada por padrão)
      let cidadesList = '<option value="" disabled selected>Escolha uma cidade</option>'

      // Loop para criar uma option para cada cidade retornada
      for (let i = 0; i < cidades.length; i++) { 
        cidadesList += `<option value="${cidades[i].nome}">${cidades[i].nome}</option>`
      }

      // Insere todas as options dentro do select de cidades
      selectCidade.innerHTML = cidadesList 
    })
}
