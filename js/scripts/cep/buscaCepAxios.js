async function buscaCepAxios() {

  // Pega o valor digitado no input do CEP
  let cep = document.querySelector("input").value
  console.log("buscando cep", cep)

  // Monta a URL da API ViaCEP usando concatenação
  let url = await "https://viacep.com.br/ws/" + cep + "/json/"
  // Monta a URL da API ViaCEP usando template string, mas não está sendo utilizado(Mais moderno)
  let url2 = await `https://viacep.com.br/ws/${cep}/json/`
  // Observação: o 'await' aqui não é necessário, pois isso não é uma Promise

  // Requisição usando Axios
  axios.get(url) // faz um GET na URL
    .then(function (response) { // se a requisição for bem-sucedida
      console.log('imprimindo com axios', response.data); // mostra os dados no console

      // Pega os dados retornados da API
      let cep = response.data

      // Preenche os campos na tela com os dados do CEP
      document.querySelector("#dadoRua").innerText = cep.logradouro
      document.querySelector("#dadoBairro").innerText = cep.bairro
      document.querySelector("#dadoCidade").innerText = cep.localidade
      document.querySelector("#dadoEstado").innerText = cep.uf
    })
}
