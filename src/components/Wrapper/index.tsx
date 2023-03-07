import styles from './styles.module.scss';

export const Wrapper = ({ children }: React.PropsWithChildren) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>{children}</div>
    </div>
  );
};
