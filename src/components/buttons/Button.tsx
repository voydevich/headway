import styles from './buttons.module.scss';
import { ButtonHTMLAttributes } from 'react';

const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button type="button" {...props} className={styles.button}/>
  );
};

export default Button;
