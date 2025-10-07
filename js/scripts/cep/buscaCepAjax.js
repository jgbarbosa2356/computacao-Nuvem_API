async function buscaCepAjax() {
  // Pega o valor digitado no input do CEP
  let cep = document.querySelector("input").value
  console.log("buscando cep", cep)

  // Monta a URL para a API do ViaCEP usando concatenação
  let url = await "https://viacep.com.br/ws/" + cep + "/json/"
  // Monta a URL para a API do ViaCEP usando template string, mas não está sendo utilizada
  let url2 = await `https://viacep.com.br/ws/${cep}/json/`

  // Realiza a requisição AJAX usando jQuery
  $.ajax({
    url: url,            
    method: 'GET',        
    success: function (data) {   // Função chamada quando a requisição é bem-sucedida
      console.log(data);          // Mostra os dados recebidos no console
      // Preenche os campos da tela com os dados retornados pela API
      document.querySelector("#dadoRua").innerText = data.logradouro
      document.querySelector("#dadoBairro").innerText = data.bairro
      document.querySelector("#dadoCidade").innerText = data.localidade
      document.querySelector("#dadoEstado").innerText = data.uf
    },
    error: function (jqXHR, textStatus, errorThrown) {   // Função chamada em caso de erro
      console.error('Erro na requisição:', textStatus, errorThrown);
    }
  });

}
