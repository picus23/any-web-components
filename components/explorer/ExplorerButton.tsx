import { FC } from "react";
import { MdArrowBackIos, MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

interface ExolorerButtonProps {
    onClick: () => void,
    direction?: 'forward' | 'backward'
}

const ExolorerButton: FC<ExolorerButtonProps> = ({onClick, direction = 'forward'}) => {
    return <button className="ExplorerItemButton" onClick={(event) => {
        event.stopPropagation()
        onClick()
    }}>
        {
            direction == 'forward' 
                ?<MdArrowForwardIos size={20} color='#969696' />
                :<MdArrowBackIosNew size={20} color='#969696'/>
        }
    </button>;
}

export default ExolorerButton;