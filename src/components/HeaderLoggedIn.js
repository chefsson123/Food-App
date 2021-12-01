import Button from '../UI/Button'

import './HeaderLoggedIn.css'

const HeaderLoggedIn = (props) => {
 


    return <header id="navbar">
        <h1 className="logo">Tokico</h1>

     <p className="greeting">Hello there</p>
        <Button>Cart</Button>
    </header>
}

export default HeaderLoggedIn;