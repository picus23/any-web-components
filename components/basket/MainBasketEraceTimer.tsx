import { FC, memo, useEffect, useRef } from "react";
import Button from "../buttons/Button";
import { MdRestore } from "react-icons/md";
import { type } from "os";


interface MainBasketEraceTimerProps {
    onClick: () => void,
    textSize?: string,
    timerWidth: boolean | number,
}

const MainBasketEraceTimer: FC<MainBasketEraceTimerProps> = ({ onClick, textSize, timerWidth }) => {

    return <div className="d-flex flex-column position-absolute h-100 w-100" style={{ backgroundColor: '#fffb', zIndex: 2 }}>
        <div className="position-absolute" id="basket-timer" style={{ ...timerWidth ? {width: timerWidth + '%'} : false }} />
        {/* <div className="position-absolute" id="basket-timer" style={{ width: timerWidth + '%' ?? false }} /> */}
        <div className="d-flex flex-column justify-content-center align-items-center gap-1 mt-1">
            <h6 style={{ fontSize: textSize ?? '20px', fontWeight: '500' }}>Товар удалён</h6>
            <Button
                fontSize={textSize}
                onClick={onClick}
                btn_style="btn-outline-secondary"
                icon={<MdRestore fill="#969696" />}
            >
                Восстановить
            </Button>
        </div>
    </div>


}

export default memo(MainBasketEraceTimer);