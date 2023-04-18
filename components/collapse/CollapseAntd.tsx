import React from 'react';
import {ReactNode} from 'react';
import { Collapse } from 'antd';
// import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";



const { Panel } = Collapse;

interface CollapseProps {
    title: string,
    text?: string
    children?: ReactNode,
}

const CollapseAntd: React.FC<CollapseProps> = ({ title, text,children }) => {
    const onChange = (key: string | string[]) => {
        console.log(key);
    };

    return (
        <Collapse accordion>
            <Panel header={title} key="1">
                {/* {children} */}



                {/* <SyntaxHighlighter children={'text'} language="typescript"  /> */}
                <pre>
                    <code>{text}</code>
                </pre>

            </Panel>
        </Collapse>
    );
};

export default CollapseAntd;
