import React from 'react';
import { Collapse } from 'antd';

const { Panel } = Collapse;

interface CollapseProps {
    title:string,
    text:string
}

const CollapseAntd: React.FC<CollapseProps> = ({title,text}) => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return (
    <Collapse>
      <Panel header={title} key="1">
        <p>{text}</p>
      </Panel>
    </Collapse>
  );
};

export default CollapseAntd;