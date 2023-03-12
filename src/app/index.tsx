import { ReactComponent as ConstructorIcon } from '@/assets/constuctor.svg';
import { ReactComponent as RuntimeIcon } from '@/assets/runtime.svg';
import { Draggable } from '@/components';
import Layout from '@/components/Layout';
import { Button, ButtonProps, Input, Radio } from '@/shared/ui';
import { values } from '@/shared/utils';
import { useState } from 'react';
import shortid from 'shortid';
import './styles.scss';

const App = () => {
  const [view, setView] = useState('');

  return (
    <div className="app">
      <div className="calculator">
        <Draggable id={shortid()}>
          <Input />
        </Draggable>
        {Object.entries(values).map(([key, value]) => {
          const id = shortid();
          return (
            <Draggable key={id} id={id}>
              {value.map(({ content, size, appearance }) => (
                <Button
                  key={content}
                  content={content}
                  size={size}
                  appearance={appearance}
                />
              ))}
            </Draggable>
          );
        })}
      </div>

      <div className="header">
        <Radio dispatch={setView}>
          <Radio.Button value="runtime" icon={<RuntimeIcon />} />
          <Radio.Button value="constructor" defaultChecked icon={<ConstructorIcon />} />
        </Radio>
      </div>
      <div className="layout">
        <Layout />
      </div>
    </div>
  );
};

export default App;
