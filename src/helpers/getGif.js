
export const getGifs = async() => {
    
    const url = `https://api.giphy.com/v1/gifs/search?api_key=AzjYYCoML8de63YvPaCYHyVtvmO3tukX&q=HunterxHunter&limit=${2}`;
    const resp = await fetch(url);
    const{data} = await resp.json();
    const gifs = data.map(img => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    }));    
    return gifs;
  }; 