// Função assíncrona para buscar informações de um CEP usando fetch
async function buscaCepFetch() {

  // Pega o valor digitado no input (CEP)
  let cep = document.querySelector("input").value
  console.log("buscando cep", cep)

  // Monta a URL da API ViaCEP usando concatenação
  let url = await "https://viacep.com.br/ws/" + cep + "/json/"
  // Monta a URL da API ViaCEP usando template string, mas não está sendo utilizado(Mais moderno)
  let url2 = await `https://viacep.com.br/ws/${cep}/json/`
  // Observação: 'await' não é necessário aqui, porque não é uma Promise, só está criando uma string

  // Salva o log da busca no localStorage
  salvarLogs(url, 'cep')

  // Faz a requisição para a API usando fetch
  fetch(url)
    .then((res) => { // recebe a resposta da API
      console.log('resposta aqui', res) // mostra a resposta no console
      return res.json() // converte a resposta em JSON
    })
    .then((cep) => { // recebe os dados do CEP já em formato JSON
      console.log(cep.logradouro) // mostra o logradouro no console

      // Preenche os elementos da página com os dados retornados
      document.querySelector("#dadoRua").innerText = cep.logradouro
      document.querySelector("#dadoBairro").innerText = cep.bairro
      document.querySelector("#dadoCidade").innerText = cep.localidade
      document.querySelector("#dadoEstado").innerText = cep.uf
    })
}
