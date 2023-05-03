import { FC, ReactNode } from "react";
import Button from "../buttons/Button";
import { MdRestore } from "react-icons/md";
// var ProgressBar = require('progressbar.js')

interface MainBasketEraceTimerProps {
    // title?: string,
    onClick?: () => void,
    // funcEraseTimeout?: () => void,
}

const MainBasketEraceTimer: FC<MainBasketEraceTimerProps> = ({ onClick, funcEraseTimeout }) => {
    // function deleteBar() {
    //     const line = new ProgressBar.Line('#basket-timer',
    //         {
    //             color: '#0085FF',
    //             height: '4px',
    //             trailColor: '#fff',
    //         });
    //     line.animate(1, {
    //         duration: 5000
    //     }, { funcEraseTimeout });
    // }


    return <>
        {/* {deleteBar()} */}
        <div className="d-flex flex-column w-75">
            <div id="basket-timer" className="" />
            <div className="d-flex flex-column justify-content-center align-items-center gap-1 py-4 bg-white">
                <h6 style={{ fontSize: '20px', fontWeight: '500' }}>Товар удалён</h6>
                <Button
                    btn_style="btn-outline-secondary"
                    icon={<MdRestore fill="#969696" />}
                >
                    Восстановить
                </Button>
            </div>
            {/* <span
                className="d-flex justify-content-center align-items-center pt-2 pb-1"
                style={{ fontSize: '20px', color: '#585757' }}>
                Только удалили
            </span> */}
        </div>

    </>;
}

export default MainBasketEraceTimer;