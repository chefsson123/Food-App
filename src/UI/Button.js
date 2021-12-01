import './Button.css'

const Button = (props) => {

    return <button className="button" onClick={props.show}>{props.children}</button>

}

export default Button;