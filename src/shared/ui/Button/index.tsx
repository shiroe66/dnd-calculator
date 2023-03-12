import * as React from 'react';
import clsx from 'clsx';
// FIX
import styles from './styles.module.scss';
import { Button as IButton } from '@/shared/interfaces';

// FIX
export interface ButtonProps
  extends IButton,
    React.ButtonHTMLAttributes<HTMLButtonElement> {}

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
