import { Link } from "react-router-dom";


const menus = [
    {label:"Home", path: '/'},
    {label:"Menu", path: '/menu'},
    {label:"About", path: '/about'},
    {label:"Contact Us", path: '/contact-us'},
    {label:"Book A Party", path: '/bookaparty'},

];
const searchtab = [
  {label:"Login", path: '/Login'},
  {label:"Search", path: '/Search'}
];

function Header () {
  return (
    <div className="navbar navbar-expand-lg bg-white shadow py-3 sticky-top">
      <div className="container">
      <div className="app-header-logo"><img src="cheekies.png" width={180}/>
      </div>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
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
    </div>
  )
}

export default Header
