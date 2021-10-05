function fazGet(url) {
  let request = new XMLHttpRequest()
  request.open('GET','POST','PUT','DEL', url, false)
  request.send()
  return request.responseText
}

function criaLinha(usuario) {
  console.log(usuario)
  linha = document.createElement('tr')
  tdId = document.createElement('td')
  tdNome = document.createElement('td')
  tdId.innerHTML = usuario.id
  tdNome.innerHTML = usuario.name

  linha.appendChild(tdId)
  linha.appendChild(tdNome)

  return linha
}

function main() {
  console.log()

var requestOptions = {
  method: 'GET',
  body: raw,
  redirect: 'follow'
};

fetch("https://test-mais-a-educacao-v1.herokuapp.com?token=yourFullName", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

	// let data = fazGet('')
  // let usuarios = JSON.parse(data)
  // let tabela = document.getElementById('');

  // usuarios.forEach(element => {
  //   let linha = criaLinha(element)
  //   tabela.appendChild(linha)
  // });
}
