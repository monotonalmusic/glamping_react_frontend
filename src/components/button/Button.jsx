import styles from "../button/button.module.css";
import { useNavigate } from "react-router-dom";

const Button = ({ backgroundColor, color, height, width, link, onclick, children }) => {
  const navigate = useNavigate();

  const buttonStyles = {
    backgroundColor: backgroundColor || "transparent",
    color: color || "black" ,
    border: `1px solid ${color}` || "1px solid black",
    height: height || "120px",
    width: width || "250px",
  };

  const handleClick = () => {
    if (link) {
      navigate(link);
    } else if (onclick) {
      onclick();
    }
  };

  return (
    <button
      className={styles.button}
      style={buttonStyles}
      onClick={handleClick}
      type={link ? "button" : "submit"}
    >
      {children || "Click Me"}
    </button>
  );
};

export default Button;
