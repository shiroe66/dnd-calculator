import * as React from 'react';
import clsx from 'clsx';
// FIX
import styles from './styles.module.scss';

// FIX
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  appearance?: 'primary' | 'secondary';
  content: string;
  size: 's' | 'm' | 'l' | 'xl';
}

export const Button = ({
  appearance = 'primary',
  content,
  size,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(styles.btn, styles[appearance], {
        [styles.small]: size === 's',
        [styles.medium]: size === 'm',
        [styles.large]: size === 'l',
        [styles.extralarge]: size === 'xl',
      })}
      {...props}
    >
      {content}
    </button>
  );
};
