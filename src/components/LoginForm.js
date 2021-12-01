import Backdrop from '../UI/Backdrop';
import './LoginForm.css'

const LoginForm = () => {

    return <Backdrop><div className="login-container"><div className="checkit"><h1>Tokico</h1></div>
    <form className="login-form"><input type="email" placeholder="Email Address"></input><input type="password" placeholder="Password"></input><footer className="actions-signup">
               <button type="submit">Register</button>
          </footer></form></div></Backdrop>
}

export default LoginForm;