import styles from "./button.module.css";

type TButton = {
  text: string;
  width?: string;
  color?: string;
  backgroundColor?: string;
  onClick: (valor: string) => void;
};

export const Button = ({
  text,
  width,
  color,
  backgroundColor,
  onClick,
}: TButton) => {
  const returnNumberValue = () => {
    onClick(text);
  };

  return (
    <button
      className={styles.button}
      onClick={() => returnNumberValue()}
      style={{ width, color, backgroundColor }}
    >
      {text}
    </button>
  );
};
