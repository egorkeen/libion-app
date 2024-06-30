import { Flex } from 'antd';
import { Logo } from '../Logo';
import { NavLink } from '../NavLink';
import styles from './Header.module.scss';
import random from "@assets/Random.svg";
import favorite from "@assets/Favorite.svg";
import { GradientButton } from '../GradientButton';

export const Header = () => {
  return (
    <header className={styles.header}>
      <NavLink to="/">
        <Logo />
      </NavLink>

      <Flex align='center' gap={65}>
        <NavLink to="/random">
          <img src={random} draggable={false} />
        </NavLink>
        <NavLink to="/favorite">
          <img src={favorite} draggable={false} />
        </NavLink>
        <GradientButton type='medium'>
          Войти
        </GradientButton>
      </Flex>

    </header>
  );
};