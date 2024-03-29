import styles from './buttons.module.scss';
import { ButtonHTMLAttributes } from 'react';

interface TProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  state: 'selected' | 'correct' | 'wrong' | '';
}

const AnswerButton = (props: TProps) => {
  const {
    state,
    onClick,
  } = props;

  const stateClass = styles[state];

  return (
    <button type="button" onClick={onClick} className={`${styles.answerButton} ${stateClass}`}>
      <div className={styles.border}>
        <svg width="389" height="72" viewBox="0 0 389 72" fill="none"
             xmlns="http://www.w3.org/2000/svg">
          <path
            d="M23.8137 5.09773C25.9857 2.2033 29.3933 0.5 33.012 0.5H355.988C359.607 0.5 363.014 2.2033 365.186 5.09773L388.375 36L365.186 66.9023C363.014 69.7967 359.607 71.5 355.988 71.5H33.012C29.3933 71.5 25.9857 69.7967 23.8137 66.9023L0.625116 36L23.8137 5.09773Z"
          />
        </svg>
        <div className={styles.text}>
          {props.children}
        </div>
      </div>
    </button>
  );
};

export default AnswerButton;
