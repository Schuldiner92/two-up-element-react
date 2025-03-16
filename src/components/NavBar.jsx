import { Link } from "react-router-dom";

export const NavBar = () => {
  return (    
    <nav>
        <Link to="/">Elements</Link>
        <Link to="/images">Images</Link>
        <Link to="/gifs">Gifs</Link>
    </nav>    
  )
}
