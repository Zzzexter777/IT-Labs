import PropTypes from "prop-types";
import "./Button.css";
import {useState} from "react";


const Button = ({children, title}) => {
    const [count, setCount] = useState(0);

    return (
        <button 
        title={title} 
        className="button"
        onClick={() => {
            setCount(prev => prev + 1)
        }}>
            {children}: {count}
        </button>
    );
 };

    Button.propTypes = {
        title: PropTypes.string,
        children: PropTypes.any.isRequired,
    }

export default Button