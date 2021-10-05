function fazPost(url, body) {
    console.log('Body=', body)
    let request = new XMLHttpRequest()
    request.open('DEL', url, true)
    request.setRequestHeader('Content-type', 'application/json')
    request.send(JSON.stringify(body))
  
    request.onload = function () {
      console.log(this.responseText)
    }
  
    return request.responseText
  }
  
  function createRebel() {
    preventDefault()
    let url = `http://test-mais-a-educacao-v1.herokuapp.com?token=${name}`
  
    let name = document.getElementById('name').value
    let planet = document.getElementById('planet').value
    let birthDate = document.getElementById('birthDate').value
    let description = document.getElementById('description').value
  
    console.log(name)
    console.log(planet)
    console.log(birthDate)
    console.log(description)
  
    body = {
      "name": name,
      "planet": planet,
      "birthDate": birthDate,
      "description": description
    }
  
    fazPost(url, body)
  }