import {
  createContext,
  Dispatch,
  InputHTMLAttributes,
  PropsWithChildren,
  SetStateAction,
  useContext,
} from 'react';
import styles from './styles.module.scss';

interface RadioProps {
  dispatch: Dispatch<SetStateAction<string>>;
}

export const Radio = ({ dispatch, children }: PropsWithChildren<RadioProps>) => {
  return (
    <div className={styles.group}>
      <RadioContext.Provider value={{ dispatch }}>{children}</RadioContext.Provider>
    </div>
  );
};

const RadioContext = createContext<RadioProps | null>(null);

const useRadio = () => {
  const context = useContext(RadioContext);
  if (!context) {
    throw new Error();
  }
  return context.dispatch;
};

interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  icon: JSX.Element;
}

Radio.Button = function ({ value, icon, ...props }: RadioButtonProps) {
  const dispatch = useRadio();

  const handleClick = () => {
    dispatch(value);
  };

  return (
    <>
      <input type="radio" id={value} name={'view'} {...props} className={styles.input} />
      <label htmlFor={value} className={styles.label} onClick={handleClick}>
        <div className={styles.icon}>{icon}</div>
        {value}
      </label>
    </>
  );
};
