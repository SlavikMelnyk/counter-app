import './index.css';

const Button = ({ title, className, onClick }) => (
    <button className={className} onClick={onClick}>
        {title}
    </button>
);

export default Button;