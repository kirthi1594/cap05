let searchInput = document.getElementById("search")
let btn = document.getElementById("btn")
let container = document.getElementById("container")
let movie = document.querySelectorAll(".movie")
 
// http://www.omdbapi.com/?i=tt3896198&apikey=9d815d6c

async function movieSearch(){
    let query = searchInput.value;
   let resp = await fetch(`http://www.omdbapi.com/?s=${query}&apikey=9d815d6c`)
   let result = await resp.json()
   let movieArr=result.Search
   console.log(movieArr)

   for(let movieObj of movieArr){
    let poster= movieObj.Poster
    let year = movieObj.Year
    let title= movieObj.Title

    movieName(poster,title,year)
   }
   
}
btn.addEventListener("click",function(e){
   e.preventDefault()
   movieSearch()
})

function movieName(img,title,year){
    let card = document.createElement("div")
    card.innerHTML=`
    <img src=${img}>
    <h1>${title}</h1>
    <p>${year}</p>
    `
    card.setAttribute("class","movie")
    container.append(card)
    

}