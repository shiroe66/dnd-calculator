import styles from './styles.module.scss';
import { ReactComponent as GaleryIcon } from '@/assets/galery.svg';

const Layout = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.wrapper}>
        <GaleryIcon />
        <div className={styles.title}>Перетащите сюда</div>
        <div className={styles.description}>
          любой элемент <br /> из левой панели
        </div>
      </div>
    </div>
  );
};

export default Layout;
