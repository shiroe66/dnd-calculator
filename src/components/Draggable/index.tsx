import { DragEvent, PropsWithChildren } from 'react';
import styles from './styles.module.scss';

interface DraggableProps {
  id: string;
}

export const Draggable = ({ children, id }: PropsWithChildren<DraggableProps>) => {
  const handleDrag = (e: DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData('text/plain', id);
  };

  return (
    <div className={styles.wrapper} draggable={true} id={id} onDragStart={handleDrag}>
      <div className={styles.inner}>{children}</div>
    </div>
  );
};
