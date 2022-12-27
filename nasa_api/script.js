let searchButton = document.querySelector("#search")

searchButton.addEventListener('click', () => {
    console.log('You clicked the button');
    sendApiRequest()
})

async function sendApiRequest(){
    let API_KEY = "hmkdt7T5aKoej0RRgVXYcxZZwcVOB5OO0lNRQ94R";
    let response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2022-02-23&api_key=${API_KEY}`);
    console.log(response);
    let data = await response.json()
    console.log(data);
    useApiData(data)
}

function useApiData(data) {
    //document.querySelector("#content").innerHTML += `<img src="${data.url}"></img>`
    //document.querySelector("#content").innerHTML += data.explanation

    document.querySelector("#content").innerHTML += `<img src="${data.photos[216].img_src}"></img>`
    document.querySelector("#content").innerHTML 
}