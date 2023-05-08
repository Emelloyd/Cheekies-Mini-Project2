import { Link } from "react-router-dom";


const menus = [
    {label:"Home", path: '/'},
    {label:"Menu", path: '/menu'},
    {label:"About", path: '/about'},
    {label:"Contact Us", path: '/contact-us'},
    {label:"Book A Party", path: '/bookaparty'}

];


function Header () {
  return (

    <div className="navbar navbar-expand-lg bg-white shadow py-3 sticky-top">
      <div className="container">
      <div className="app-header-logo">
          <Link to='/'>
          <img 
          className="header-logo"
          src = " cheekies.png " 
          />
          </Link>
      </div>
        <div>
        <ul className="main-menu">
          {menus.map((item)=><li>
          <Link to={item.path}>{item.label}</Link>
          </li>)}
        </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
