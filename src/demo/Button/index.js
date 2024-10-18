import react from "react";

const Button = ({ onClick, children }) =>{
    return (
        <button onClick={onClick}>
            {children}
        </button>
    )
}
export default Button;