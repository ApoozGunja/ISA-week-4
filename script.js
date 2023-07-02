function getData(title){
    const apikey = "b4cdfba7";
    const url = `https://www.omdbapi.com/?t=${title}&apikey=b4cdfba7`;
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            movieTitle.innerHTML = `Title: <b>${title}</b>`;
            rating.innerHTML = `IMDB Rating:<b> ${data.imdbRating}</b><br> Release Year: <b>${data.Year}</b><br>Director Name: <b>${data.Director}</b><br><br><img src="${data.Poster}" style="max-width:250px">`;
        });
}

function defaultFetch(){
    const title = "Avatar";
    getData(title) 
}
defaultFetch()

function getValue(event){
    event.preventDefault();
    var form=document.querySelector(".searchBar");
    var title=form.querySelector(".searchText").value;
    getData(title)
}