import { FC, ReactNode } from "react";
import Button from "../buttons/Button";
import { MdRestore } from "react-icons/md";
// var ProgressBar = require('progressbar.js')

interface MainBasketEraceTimerProps {
    onClick?: () => void,
}

const MainBasketEraceTimer: FC<MainBasketEraceTimerProps> = ({ onClick }) => {

    return <>
        {/* {deleteBar()} */}
        <div className="d-flex flex-column w-75">
            <div id="basket-timer" className="" />
            <div className="d-flex flex-column justify-content-center align-items-center gap-1 py-4 bg-white">
                <h6 style={{ fontSize: '20px', fontWeight: '500' }}>Товар удалён</h6>
                <Button
                    onClick={onClick}
                    btn_style="btn-outline-secondary"
                    icon={<MdRestore fill="#969696" />}
                >
                    Восстановить
                </Button>
            </div>
        </div>

    </>;
}

export default MainBasketEraceTimer;