import { FC } from "react";
import { MdArrowForwardIos, MdCheck } from "react-icons/md";
import ExplorerButton from './ExplorerButton'

interface ExplorerItemProps {
    title: string,
    checked?: 0 | 1 | 2,
    isFolder?: boolean,
    onChange: (status: boolean) => void,
    onOpen: () => void,
}

const ExplorerItem: FC<ExplorerItemProps> = ({ title, checked, isFolder, onChange, onOpen }) => {
    return <li tabIndex={0} className={`ExplorerItem  ${checked && 'active'}`} onClick={() => onChange(checked != 0 ? false : true)}>
        <div className='ExplorerItemCheckbox'>
            <MdCheck size={24} color={checked == 2 ? '#0085FF' : '#969696'} />
        </div>
        <div className="ExplorerItemTitle">
            {title}
        </div>
        {
            isFolder && <ExplorerButton onClick={onOpen}/>
        }
    </li>
}

export default ExplorerItem;