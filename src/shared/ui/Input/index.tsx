import { PropsWithChildren } from 'react';
import styles from './styles.module.scss';

export const Input = ({ children }: PropsWithChildren) => {
  return (
    <input type="number" className={styles.input}>
      {children}
    </input>
  );
};
