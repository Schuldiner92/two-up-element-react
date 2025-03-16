import 'two-up-element';
import '../styles.css';
import { useToggleOrientation } from '../hooks/useToggleOrientation';


export const TwoUpElements = () => {

  const {orientation, toggleOrientation} = useToggleOrientation('');

  return (
    <>      
      <div className="tue-container">   
        <h2>Two-Up Elements</h2>         
          <two-up orientation={orientation}>
            <div className="light">
              <h1 className="lightText">Free The Light!</h1>
            </div>
            <div className="dark">
              <h1 className="darkText">Enter The Darkness! </h1>
            </div>
          </two-up>        
        <button onClick={toggleOrientation}>
          Toggle Orientation
        </button>
        
      </div>    
    </>
  )
}
