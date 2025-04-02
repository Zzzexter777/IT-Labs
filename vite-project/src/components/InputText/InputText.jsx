import PropTypes from "prop-types";
import "./InputText.css";

const InputText = ({ value, onChange }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label>Введите текст</label>
      <input 
        type="text" 
        value={value} 
        onChange={(e) => onChange(e.target.value)} 
      />
    </form>
  );
};

InputText.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputText;
