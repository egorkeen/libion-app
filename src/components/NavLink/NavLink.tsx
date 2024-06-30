import { ReactNode } from "react";
import { Link, To } from "react-router-dom";
import styles from './NavLink.module.scss';

interface IProps {
  to: To;
  children: ReactNode;
}

export const NavLink = ({ to, children }: IProps) => {
  return (
    <Link className={styles.navLink} to={to}>{children}</Link>
  );
};