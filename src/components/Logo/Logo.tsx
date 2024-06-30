import logo from "@assets/Logo.svg";
import styles from './Logo.module.scss';

export const Logo = () => {
  return (
    <img draggable={false} className={styles.logo} src={logo} />
  );
};