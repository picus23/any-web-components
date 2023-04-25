import { ReactNode, FC } from 'react'
import ButtonGrayChevron from '../buttons/ButtonGrayChevron';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import BreadCrumbs from '../breadСrumbs/BreadCrumbs';
import { IBreadСrumbs } from '../breadСrumbs/interface'

interface encoding {
    key: string,
    title: string,
}

interface EncodingBlockTextProps {
    children?: ReactNode,
    prop_encodings: encoding[],
    list: IBreadСrumbs[],
}

const EncodingBlockText: FC<EncodingBlockTextProps> = ({ prop_encodings, list }) => {
    return <>
        <div className="col-5 align-items-start">
            <div className='d-flex flex-column'>
                <div style={{ color: '#585757', fontSize: '16px', fontWeight: '400' }}>
                    <BreadCrumbs list={list}></BreadCrumbs>
                </div>

                <strong className='mb-3 mt-2' style={{ fontWeight: '500', fontSize: '24px', lineHeight: '32px' }}>H1B-H-6M</strong>

                <div className='row gy-3'>
                    {
                        prop_encodings.map(el => {
                            return <div className='col-6' style={{ fontSize: '16px', fontWeight: '400' }}><span style={{ color: '#969696' }}>{el.key}</span><span>{el.title}</span></div>
                        })
                    }
                </div>

            </div>

        </div>
    </>;
}

export default EncodingBlockText;