import React from 'react';
import {ReactNode} from 'react';
import { Collapse } from 'antd';

const { Panel } = Collapse;

interface CollapseProps {
    title?: string,
    text?: string
    children?: ReactNode,
}

const CollapseAntd: React.FC<CollapseProps> = ({ title, children, text }) => {
    const onChange = (key: string | string[]) => {
        console.log(key);
    };

    return (
        <Collapse accordion>
            <Panel header={'Find'} key="1">
                
            </Panel>
        </Collapse>
    );
};

export default CollapseAntd;