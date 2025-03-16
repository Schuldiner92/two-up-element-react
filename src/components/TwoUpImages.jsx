import 'two-up-element';
import '../styles.css';
import { useToggleOrientation } from '../hooks/useToggleOrientation';


export const TwoUpImages = () => {

  const {orientation, toggleOrientation} = useToggleOrientation('');
  
  return (
    <>    
      <div className="tue-container">             
        <h2>Two-Up Images</h2> 
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
