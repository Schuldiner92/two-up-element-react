import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGif";

export const useFetchGifs = () => {
    
    const [images, setImages] = useState([]);    
    
    const getImages = async() => {
    const newImages = await getGifs();
    setImages(newImages);      
    };
    
    useEffect(()=>{
        getImages();    
    }, [])     

    return {
        images,        
    }
};