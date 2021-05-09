const apyKey = 'Fx16au8XaXm3cKQb9QsK2RoOR7rZL7G9';
const url = 'http://api.giphy.com/v1/gifs/random?api_key=Fx16au8XaXm3cKQb9QsK2RoOR7rZL7G9';

const request = fetch(url_request);

request
    .then(resp => resp.json())
    .then(({ data }) => {
        const {url}  = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    })
    .catch(console.warn)