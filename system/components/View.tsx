import assert from "assert";
import Image, { StaticImageData } from "next/image";
import { FC, useEffect, useState } from "react";
import parse from 'html-react-parser';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';



const Prism = require('prismjs');


enum showEnum {
    design, 
    component, 
    code,
}

const showEnumList = [showEnum.design, showEnum.component, showEnum.code]

interface ViewProps {
    image: StaticImageData,
    component: () => string,
}



const View: FC<ViewProps> = ({ image, component }) => {
    const [activeTab, setActiveTab] = useState<showEnum>(showEnum.design);

    let show = <>select type</>
    const code = component()


    switch (activeTab) {
        case showEnum.design:
            show = <Image src={image} alt="" />
        break;
        case showEnum.code:
            
            // show = <SyntaxHighlighter language="javascript" style={docco}>
            //     {code}
            // </SyntaxHighlighter>

            const html = Prism.highlight(code, Prism.languages.javascript, 'javascript')
            show = <div dangerouslySetInnerHTML={{__html: html}}></div>
            // show = <pre>
            //     <code>
            //         {code}
            //     </code>
            // </pre>
        break;
        case showEnum.component:
            show = <>{parse(code)}</>
        break;
    }


    return <>

        <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
            {
                showEnumList.map((type) => {
                    return <button 
                                type="button" 
                                className={`btn btn-outline-primary ${type == activeTab && 'active'}`}
                                onClick={() => setActiveTab(type)}
                        >{showEnum[type]}</button>
                })
            }
        </div>

        <div key={showEnum.code}>{show}</div>
    </>

}

export default View;