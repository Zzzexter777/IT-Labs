import PropTypes from "prop-types";
import "./Button.css";

const DefaultButton = ({ children, onClick, disabled }) => {
  return (
    <button 
      className="button" 
      onClick={onClick} 
      disabled={disabled}
    >
      {children}
    </button>
  );
};

DefaultButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default DefaultButton;
