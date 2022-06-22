import { useState } from 'react';
import styles from './button.module.css';

type TButton = {
  text: string;
  width?: string;
  color?: string;
  backgroundColor?: string;
  onClick?: (valor: string) => void;
};

export const Button = ({
  text,
  width,
  color,
  backgroundColor,
  onClick,
}: TButton) => {
  const returnNumberValue = () => {
    onClick?.(text);
  };

  const [isMouseDown, setIsMouseDown] = useState(false);

  return (
    <button
      className={styles.button}
      onClick={() => returnNumberValue()}
      onMouseDown={() => setIsMouseDown(true)}
      onMouseUp={() => setIsMouseDown(false)}
      style={{
        width,
        color,
        backgroundColor,
        borderBottom: isMouseDown
          ? `2px solid ${backgroundColor || '#aba195'}`
          : `5px solid ${backgroundColor || '#aba195'}`,
        borderBottomColor:
          isMouseDown && backgroundColor ? '#aba195' : '#aba195',
      }}
    >
      {text}
    </button>
  );
};
