import React from 'react';

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button style={styles.button} onClick={onClick}>
      {text}
    </button>
  );
};

const styles = {
  button: {
    display: 'block',
    width: '80%',
    margin: '10px auto',
    padding: '10px',
    fontSize: '16px',
  },
};

export default Button;
