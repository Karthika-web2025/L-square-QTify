 import styles from './Button.module.css';

// const Button = ({ children, className = '', ...props }) => {
//   return (
//     <button className={`${styles.button} ${className}`} {...props}>
//       {children}
//     </button>
//   );
// };

// export default Button;

const Button = ({ children, className = '',onClick, type = "button", ...props }) => {
  return (
    <button
    className={`${styles.button}${className}`}
      type={type}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
