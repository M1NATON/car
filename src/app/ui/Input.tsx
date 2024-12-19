import { InputHTMLAttributes } from "react";


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

const Input: React.FC<InputProps> = ({ label, error, ...props }) => {
    return (
        <div className="inputContainer">
            {label && <label className="inputLabel">{label}</label>}
            <input className={`inputField ${error ? "inputError" : ""}`} {...props} />
            {error && <span className="errorText">{error}</span>}
        </div>
    );
};

export default Input;
