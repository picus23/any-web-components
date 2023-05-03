import { FC, memo, useEffect, useRef } from "react";
import Button from "../buttons/Button";
import { MdRestore } from "react-icons/md";


interface MainBasketEraceTimerProps {
    onClick: () => void,
    onErace: () => void,
}

const MainBasketEraceTimer: FC<MainBasketEraceTimerProps> = ({ onClick, onErace }) => {
    const timer = useRef(null)

    useEffect(() => {
        timer.current = setTimeout(() => {
            onErace()
        }, 5000)
        return () => clearTimeout(timer.current)
    }, [])

    return <>
        {/* {deleteBar()} */}
        <div className="d-flex flex-column w-75">
            <div id="basket-timer" className="" />
            <div className="d-flex flex-column justify-content-center align-items-center gap-1 py-4 bg-white">
                <h6 style={{ fontSize: '20px', fontWeight: '500' }}>Товар удалён</h6>
                <Button
                    onClick={() => {
                        if (timer.current) 
                            clearTimeout(timer.current)
                        
                        onClick()
                    }}
                    btn_style="btn-outline-secondary"
                    icon={<MdRestore fill="#969696" />}
                >
                    Восстановить
                </Button>
            </div>
        </div>

    </>;
}

export default memo(MainBasketEraceTimer);