
import NavButton from '../UI/NavButton';

import './HeaderLoggedIn.css'

const HeaderNotLoggedIn = (props) => {




    return <header id="navbar">
        <h1 className="logo">Tokico</h1>

     
        <NavButton onShow={props.onShow} onLogin={props.onLogin}/>
       
    </header>
}

export default HeaderNotLoggedIn;