import PropTypes from "prop-types";
import "./Radio.css";

const Radio = ({ children, checked, onChange, value }) => {
    return (
        <label className="label">
            <input
                type="radio"
                name="mode"
                className="radio"
                checked={checked}
                onChange={onChange}
                value={value}
            />
            {children}
        </label>
    );
};

Radio.propTypes = {
    checked: PropTypes.bool,
    children: PropTypes.any.isRequired,
    onChange: PropTypes.func,
    value: PropTypes.string
};

export default Radio;