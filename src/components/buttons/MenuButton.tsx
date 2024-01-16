import styles from './buttons.module.scss';
import CloseSvg from '@/components/svg/Close.svg';
import MenuSvg from '@/components/svg/Menu.svg';

type TProps = {
  open: boolean,
  onClick: () => void
};

const MenuButton = (props: TProps) => {
  const {
    open,
    onClick,
  } = props;
  return (
    <button type="button" className={styles.menuButton} onClick={onClick}>
      {open ? <CloseSvg/> : <MenuSvg/>}
    </button>
  );
};

export default MenuButton;
