var marvelUrl = "developer.marvel.com/?apikey=d782c681f06df65eee93b880dc599fb7"

function getApi(marvelUrl) {
    fetch(marvelUrl)
      .then(function (response) {
        console.log(response);
        
        return response.json();
    })
    .then(function(data){
      console.log(data)
    });
  }