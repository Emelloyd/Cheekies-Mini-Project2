import { Link } from "react-router-dom";

const menus = [
    {label:"Home", path: '/'},
    {label:"Menu", path: '/menu'},
    {label:"About", path: '/about'},
    {label:"Contact Us", path: '/contact-us'},
    {label:"Book A Party", path: '/bookaparty'}
];
const searchtab = [
  {label:"Login", path: '/Login'},
  {label:"Search", path: '/Search'}
];

function Header () {
  return (
    <div className="navbar">
      <div className="app-header-logo"><img src="cheekies.png"/></div>
      <nav>
      <ul className="main-menu">
        {menus.map((item)=><li>
        <Link to={item.path}>{item.label}</Link>
        </li>)}
      </ul>
      </nav>
      <div className="login">
        {searchtab.map((item)=><li>
        <Link to={item.path}>{item.label}</Link>
        </li>)}
      </div>
    </div>
  )
}

export default Header
