import { ReactNode, FC } from 'react'
import ButtonGrayChevron from '../buttons/ButtonGrayChevron';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import BreadCrumbs from '../breadСrumbs/BreadCrumbs';

interface EncodingBlockTextProps {
    children?: ReactNode,
    list_picture: string[],
    prop_encodings: string[],
}

const EncodingBlockText: FC<EncodingBlockTextProps> = ({ children, list_picture, prop_encodings }) => {
    return <>
        <div className="d-flex flex-column">
            <BreadCrumbs></BreadCrumbs>
            <strong>H1B-H-6M</strong>
            {
                prop_encodings.map(key,valueqwe)
            }
            <div >

            </div>
        </div>
    </>;
}

export default EncodingBlockText;