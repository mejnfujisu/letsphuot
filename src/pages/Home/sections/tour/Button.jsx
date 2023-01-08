import Styles from "pages/Home/sections/tour/Button.module.css";

import PropTypes from "prop-types";

function Button({ text }) {
    return <button type='button' className={Styles.btn}>{text}</button>;
}
Button.defaultProps = {
    text: ""
};

Button.propTypes = {
    text: PropTypes.string
};

export default Button;
