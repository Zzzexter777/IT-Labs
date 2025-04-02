import PropTypes from "prop-types";
import "./Button.css";
import { useState } from "react";

const ButtonTask = ({ children, title, mode }) => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(prev => prev + (mode === 'increment' ? 1 : -1));
    };

    return (
        <button 
            title={title} 
            className="button-task" 
            onClick={handleClick}
        >
            {children}: {count}
        </button>
    );
};

ButtonTask.propTypes = {
    title: PropTypes.string,
    children: PropTypes.any.isRequired,
    mode: PropTypes.oneOf(['increment', 'decrement']).isRequired
};

export default ButtonTask;