import { FC } from 'react';
import styles from './Navigation.module.scss'
import { Link } from 'react-router-dom';

const navigationArray = [
  { "BUY T-SHIRTS": "shop" },
  { WOMEN: "womenCategory" },
  { MEN: "menCategory" },
  { ABOUT: "about" },
  { CONTACT: "contact" },
];

interface prop {
    styleText:string
}

const Navigation:FC<prop> = ({styleText}) => {
  return (
    <ul className={styles[styleText]}>
      {navigationArray.map((item, key) => {
        return (
          <li className={styles.navigationElement} key={key}>
            <Link to={Object.values(item)[0]}>{Object.keys(item)[0]}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Navigation;
