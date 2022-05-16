//IeOQZA4twT8SA8J4SZwsyjUe1XHctk7A
async function searchGiphy(search) {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=IeOQZA4twT8SA8J4SZwsyjUe1XHctk7A&q=${search}&limit=1&offset=0&rating=g&lang=en`;
    const res = await axios.get(url);
    const img = document.createElement('img');
    img.src = res.data.data[0].images.original.url;
    input.value = '';
    const body = document.querySelector('body');
    body.append(img);
}

async function randomGiphy() {
    const url = 'https://api.giphy.com/v1/gifs/random?api_key=IeOQZA4twT8SA8J4SZwsyjUe1XHctk7A'
    const res = await axios.get(url);
    const img = document.createElement('img');
    img.src = res.data.data.images.original.url;
    const body = document.querySelector('body');
    body.append(img);
}

const input = document.querySelector('#input');
const form = document.querySelector('#searchform');
form.addEventListener('submit', function(event){
    event.preventDefault();
    if(input.value)
        searchGiphy(input.value);
    else
        randomGiphy();
});

const removeGifsBtn = document.querySelector('#removeGifs');
removeGifsBtn.addEventListener('click', function(){
    let images = document.getElementsByTagName('img');
    while(images.length > 0) {
        images[0].parentNode.removeChild(images[0]);
    }
});


