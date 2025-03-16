import 'two-up-element';
import '../styles.css';
import { useToggleOrientation } from '../hooks/useToggleOrientation';


export const TwoUpGifs = () => {

  const {orientation, toggleOrientation} = useToggleOrientation('');

  return (
    <>      
      <div className="tue-container"> 
        <h2>Two-Up Gifs</h2>   
        {/*// TODO: get a giphy API and use it here */}
        <two-up orientation={orientation}>
          <img src="TOTK-Coliseo01.png"></img>
          <img src="TOTK-Coliseo02.png"></img>          
        </two-up>
        <button onClick={toggleOrientation}>
          Toggle Orientation
        </button>
      </div>    
    </>
  )
}
