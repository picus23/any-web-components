import { ReactNode, FC } from 'react'
import ButtonGrayChevron from '../buttons/ButtonGrayChevron';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

interface EncodingPictureProps {
    list_picture: string[],
    onClickLeft?: () => void,
    onClickRight?: () => void,
}

const EncodingPicture: FC<EncodingPictureProps> = ({ list_picture, onClickLeft, onClickRight }) => {
    return <>
        <div className="col-2">
            <div className='d-flex justify-content-between align-items-center px-2' style={{ height: "192px", width: "192px", background: "url(/kit/big_pic_encoding.png)" }}>
                <div>
                    <ButtonGrayChevron onClick={onClickLeft} icon={<MdChevronLeft fill="gray" />}></ButtonGrayChevron>
                </div>
                <div>
                    <ButtonGrayChevron onClick={onClickRight} icon={<MdChevronRight fill="gray" />}></ButtonGrayChevron>
                </div>
            </div>
            <div className='d-flex justify-content-center gap-2 mt-2'>
                {
                    list_picture.map(img => {
                        return <img src={img} alt="" />
                    })
                }
            </div>
        </div>
    </>;
}

export default EncodingPicture;