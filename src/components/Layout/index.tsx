import styles from './styles.module.scss';
import { ReactComponent as GaleryIcon } from '@/assets/galery.svg';
import { DragEvent, MouseEvent, useState } from 'react';
import clsx from 'clsx';

const Layout = () => {
  const [items, setItems] = useState<{ id: string; order: number }[]>([]);
  const [position, setPosition] = useState(0);

  const handleMouseDown = (event: MouseEvent<HTMLDivElement>) => {
    setPosition(event.clientY);
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();

    const id = event.dataTransfer.getData('text/plain');
    const index = items.findIndex((item) => item.id === id);

    if (index === -1) {
      setItems((prev) => [...prev, { id, order: event.clientY }]);
    } else {
      setItems((prev) => {
        return prev.map((item) => {
          if (item.id === id) {
            return { ...item, order: event.clientY };
          }
          return item;
        });
      });
    }
  };

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const renderRawHTML = (id: string) => {
    const node = document.getElementById(id);
    return node!.innerHTML;
  };

  const handleDrag = (e: DragEvent<HTMLDivElement>, id: string) => {
    e.dataTransfer.setData('text/plain', id);
  };

  return (
    <div
      className={clsx(styles.layout, {
        [styles.layout_drop]: !items.length,
      })}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      {items.length ? (
        <div>
          {items
            .sort((a, b) => a.order - b.order)
            .map((item) => (
              <div
                key={item.id}
                className={styles.item}
                draggable={true}
                onMouseDown={handleMouseDown}
                onDragStart={(e) => handleDrag(e, item.id)}
                // FIX: change to html-to-react package
                dangerouslySetInnerHTML={{ __html: renderRawHTML(item.id) }}
              />
            ))}
        </div>
      ) : (
        <div className={styles.wrapper}>
          <GaleryIcon />
          <div className={styles.title}>Перетащите сюда</div>
          <div className={styles.description}>
            любой элемент <br /> из левой панели
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;
