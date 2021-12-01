import './NavButton.css'

const NavButton = (props) => {

    return <div className="nav-buttons"><button onClick={props.onShow} className="button">Signup</button><button onClick={props.onLogin} className="button">Login</button></div>

}

export default NavButton;