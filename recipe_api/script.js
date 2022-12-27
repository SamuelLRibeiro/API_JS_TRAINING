let searchButton = document.querySelector("#search")

searchButton.addEventListener('click', () => {
    console.log("clicked");
    sendApiRequest()
})

async function sendApiRequest(){
    let APP_ID = "e0b1a849"
    let API_KEY = "0926b65a8f9324a99b70024fe3c30b8a"
    let response = await fetch(`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=tacos`);
    console.log(response);
    let data = await response.json()
    console.log(data);
    useApiData(data)
}

function useApiData(data) {
    document.querySelector("#content").innerHTML = `
        <div class="card" style="width:400px">
            <img class="card-img-top" src="${data.hits[0].recipe.image}" alt="Card image">
            <div class="card-body">
                <h4 class="card-title">${data.hits[0].recipe.label}</h4>
                <p class="card-text">Source: ${data.hits[0].recipe.source}</p>
                <a href="${data.hits[0].recipe.url}" class="btn btn-primary">Get Recipe</a>
            </div>
        </div>
        <div class="card" style="width:400px">
            <img class="card-img-top" src="${data.hits[1].recipe.image}" alt="Card image">
            <div class="card-body">
                <h4 class="card-title">${data.hits[1].recipe.label}</h4>
                <p class="card-text">Source: ${data.hits[1].recipe.source}</p>
                <a href="${data.hits[1].recipe.url}" class="btn btn-primary">Get Recipe</a>
            </div>
        </div>
    `
}