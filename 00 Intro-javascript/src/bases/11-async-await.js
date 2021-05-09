// async await

const apiKey = 'Fx16au8XaXm3cKQb9QsK2RoOR7rZL7G9';
const url_request = `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;

const getImagen = async () => {

    const res = await fetch(url_request);
    const data = await res.json();
    console.log(data)
}

const showImage = async () => {

    const res = await fetch(url_request);
    const {data} = await res.json();
    console.log(data);
    const { url } = data.images.original;

    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);

}
showImage();