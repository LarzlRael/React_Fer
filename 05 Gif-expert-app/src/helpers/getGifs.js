


export const getGifs = async (category) => {
    console.log('categoria : '+category)
    const url = `https://api.giphy.com/v1/gifs/search?limit=10&api_key=Fx16au8XaXm3cKQb9QsK2RoOR7rZL7G9&q=${encodeURI(category)}`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url

        }
    })
    return gifs;
}