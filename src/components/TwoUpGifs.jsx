import 'two-up-element';
import { useToggleOrientation } from '../hooks/useToggleOrientation';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifElement } from './GifElement';


export const TwoUpGifs = () => {

  const {orientation, toggleOrientation} = useToggleOrientation('');
  const {images} = useFetchGifs();   

  return (
    <>      
      <div className="tue-container"> 
        <h2>Two-Up Gifs</h2>           
        <two-up orientation={orientation}>          
          {
            images.map(image=>(
              <GifElement 
                key={image.id} 
                {...image} 
              />
            ))
          }           
        </two-up>
        <button onClick={toggleOrientation}>
          Toggle Orientation
        </button>
      </div>    
    </>
  )
}
