import { Link } from "react-router-dom"
import "./Header.css"

const Navbar = () => {
  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          <div className='navlink'>
            <ul className="d-flex navbar">
              <li>
                <Link className="navbar-link text-dark text-decoration-none" to='/vendor'>setting</Link>
              </li>
              <li>
                <Link className="navbar-link text-dark text-decoration-none" to='/user'>notification</Link>
              </li>
              <li>
                <Link className="navbar-link text-dark text-decoration-none" to='/pages'>my store</Link>
              </li>
              <li>
                <Link className="navbar-link text-dark text-decoration-none" to='/'>home</Link>
              </li>
            </ul>
          </div>
        </div>

      </header>
    </>
  )
}

export default Navbar
