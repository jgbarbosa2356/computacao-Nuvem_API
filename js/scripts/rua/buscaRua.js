// Função para buscar ruas usando o ViaCEP
function buscaRua() {

  // Exibe o loading na tela enquanto a busca é realizada
  $(".preloader-wrapper").show(); // MOSTRA O LOADING

  // Obtém os valores selecionados/digitados nos campos de estado, cidade e rua
  estado = document.querySelector("#estado").value
  cidade = document.querySelector("#cidade").value
  rua = document.querySelector("#rua").value

  // Monta a URL da API ViaCEP para busca por rua
  url = `https://viacep.com.br/ws/${estado}/${cidade}/${rua}/json/`

  // Cria um objeto de log com a URL, data atual e tipo 'rua'
  let log = {
    url: url,
    data: new Date().toLocaleString(),
    tipo: 'rua'
  }

  // Pega os logs armazenados no localStorage ou cria um array vazio se não houver
  let logs = JSON.parse(localStorage.getItem('logs')) || []
  // Adiciona o novo log à lista
  logs.push(log)
  // Salva a lista atualizada no localStorage
  localStorage.setItem('logs', JSON.stringify(logs))

  console.log("url montada", url) // Mostra a URL montada no console

  // Faz a requisição para a API ViaCEP usando fetch
  fetch(url)
    .then((res) => {
      // Converte a resposta em JSON
      return res.json()
    })
    .then((ruas) => { // recebe o array de ruas retornado pela API
      console.log(ruas) // mostra os dados das ruas no console

      // Seleciona o elemento onde a lista de ruas será exibida
      let listaRuas = document.querySelector("#lista-ruas")

      let ruasList = ""
      // Itera sobre cada rua retornada pela API e monta o HTML para exibição
      for (let i = 0; i < ruas.length; i++) {
        ruasList += `<ul class="collection">
                  <li class="collection-item">Rua: <span id="dadoRua">${ruas[i].logradouro}</span></li>
                  <li class="collection-item">BAIRRO: <span id="dadoBairro">${ruas[i].bairro}</span></li>
                  <li class="collection-item">CIDADE: <span id="dadoCidade">${ruas[i].localidade}</span></li>
                  <li class="collection-item">ESTADO: <span id="dadoEstado">${ruas[i].estado}</span></li>
               </ul>`
      }

      // Aguarda 2 segundos antes de exibir a lista (simulando carregamento)
      setTimeout(() => {
        listaRuas.innerHTML = ruasList // Insere o HTML gerado na página
        $(".preloader-wrapper").hide(); // ESCONDE O LOADING após exibir os resultados
      }, 2000)
    })
}
