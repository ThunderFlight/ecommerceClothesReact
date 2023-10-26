import { FC } from 'react';
import styles from './Navigation.module.scss'

const navigationArray = [
  { "BUT T-SHIRTS": "/" },
  { WOMEN: "/womenCategory" },
  { MEN: "/menCategory" },
  { ABOUT: "/about" },
  { CONTACT: "/contact" },
];

interface prop {
    styleText:string
}

const Navigation:FC<prop> = ({styleText}) => {
  return (
    <ul className={styles[styleText]}>
      {navigationArray.map((item) => {
        return (
          <li className={styles.navigationElement}>
            <a href={Object.values(item)[0]}>{Object.keys(item)[0]}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default Navigation;
