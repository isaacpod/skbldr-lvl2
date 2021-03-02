//error handling omitted, just testing
//just added a comment to test commit from gitpod
Promise.all([getMovie('tt5034838'),
            getMovie('tt1160419'),
            getMovie('tt7069210'),
            getMovie('tt2094116'),
            getMovie('tt9419884')])
  .then(function (results) {
      let parentDiv = document.getElementById("top-five-list");
      for (var i=0; i < results.length; i++) {
          //log movie result to console
          console.log(results[i]);
          //create the needed dom elements to add movie to parent div, uses bootstrap classes for styles
          let movieDiv = document.createElement("div");
          movieDiv.classList.add("form-check");
          let movieInput = document.createElement("input");
          movieInput.classList.add("form-check-input");
          movieInput.id = results[i].data.imdbID;
          movieInput.setAttribute("type", "checkbox");
          movieDiv.appendChild(movieInput);
          let movieLabel = document.createElement("label");
          movieLabel.classList.add("form-check-label");
          movieLabel.setAttribute("for", results[i].data.imdbID);
          movieLabel.innerText = results[i].data.Title
          movieDiv.appendChild(movieLabel);
          parentDiv.appendChild(movieDiv);
      }
  });

//simple function to make the api movie request
//NOTE: change to use your OMDb API key in here
function getMovie(id) {
  //Making changes is easy in the cloud and desktop!
  let url = 'https://www.omdbapi.com/?i='+id+'&apikey=CHANGEDONDESKTOPWITHCLOUDSPACESEXTENSION'
  return axios.get(url);
}