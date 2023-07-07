import { FC } from "react";
import { MdArrowForwardIos, MdCheck, MdCheckBoxOutlineBlank } from "react-icons/md";
import ExplorerButton from './ExplorerButton'

interface ExplorerItemProps {
    title: string,
    checked?: 0 | 1 | 2,
    isFolder?: boolean,
    onChange: (status: boolean) => void,
    onOpen: () => void,
}

const ExplorerItem: FC<ExplorerItemProps> = ({ title, checked, isFolder, onChange, onOpen }) => {


    if (isFolder) {
        return <li tabIndex={0} className={`ExplorerItem  ${checked && 'active'}`} >
            <div className='ExplorerItemCheckbox hoverIcon' onClick={() => onChange(checked != 0 ? false : true)}>
                <div className="icon">
                    {
                        checked == 0
                            ? <MdCheckBoxOutlineBlank size={22} color="#96969660" />
                            : <MdCheck size={22} color={checked == 2 ? '#0085FF' : '#969696'} />
                    }
                </div>
            </div>
            <div className={`ExplorerItemTitle folder`} onClick={() => { isFolder && onOpen() }}>
                <div className="title">
                    {title}
                </div>
                <div className="folderArrow">
                    <MdArrowForwardIos size={18} />
                </div>
            </div>

        </li>
    }



    return <li tabIndex={0} className={`ExplorerItem  ${checked && 'active'}`} onClick={() => onChange(checked != 0 ? false : true)}>
        <div className='ExplorerItemCheckbox' >
            <div className="icon">
                {
                    checked == 0
                        ? <MdCheckBoxOutlineBlank size={22} color="#96969660" />
                        : <MdCheck size={22} color={checked == 2 ? '#0085FF' : '#969696'} />
                }
            </div>
        </div>
        <div className="ExplorerItemTitle">
            <div className="title">
                {title}
            </div>
        </div>

    </li>
}

export default ExplorerItem;