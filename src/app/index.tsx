import { useState } from 'react';
import { Wrapper } from '@/components';
import { View } from '@/shared/types';
import { Button, Input, Radio } from '@/shared/ui';
import { ReactComponent as ConstructorIcon } from '@/assets/constuctor.svg';
import { ReactComponent as RuntimeIcon } from '@/assets/runtime.svg';
import './styles.scss';
import Layout from '@/components/Layout';

const App = () => {
  // может стоит переписать, передавая в radio само значение, а не делая defaultChecked хз
  const [view, setView] = useState<View>('constructor');

  return (
    <div className="app">
      {/* MOCK */}
      <div className="calculator">
        <Wrapper>
          <Input />
        </Wrapper>
        <Wrapper>
          <Button content="/" size="s" />
          <Button content="x" size="s" />
          <Button content="-" size="s" />
          <Button content="+" size="s" />
        </Wrapper>
        <Wrapper>
          <Button content="7" size="m" />
          <Button content="8" size="m" />
          <Button content="9" size="m" />
          <Button content="4" size="m" />
          <Button content="5" size="m" />
          <Button content="6" size="m" />
          <Button content="1" size="m" />
          <Button content="2" size="m" />
          <Button content="3" size="m" />

          <Button content="0" size="l" />
          <Button content="," size="m" />
        </Wrapper>
        <Wrapper>
          <Button content="=" appearance="secondary" size="xl" />
        </Wrapper>
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
