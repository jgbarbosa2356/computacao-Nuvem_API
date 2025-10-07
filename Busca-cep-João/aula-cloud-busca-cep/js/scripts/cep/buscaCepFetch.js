async function buscaCepFetch() {

  let cep = document.querySelector("input").value
  console.log("buscando cep", cep)

  let url = await "https://viacep.com.br/ws/" + cep + "/json/" // concatenação
  let url2 = await `https://viacep.com.br/ws/${cep}/json/`  // template string

  salvarLogs(url, 'cep')

  fetch(url)
    .then((res) => {
      console.log('resposta aqui', res)
      return res.json()
    })
    .then((cep) => {
      console.log(cep.logradouro)
      document.querySelector("#dadoRua").innerText = cep.logradouro
      document.querySelector("#dadoBairro").innerText = cep.bairro
      document.querySelector("#dadoCidade").innerText = cep.localidade
      document.querySelector("#dadoEstado").innerText = cep.uf
    })

}