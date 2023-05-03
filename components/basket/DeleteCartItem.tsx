import { FC, ReactNode } from "react";
import Button from "../buttons/Button";
import { MdRestore } from "react-icons/md";

interface DeleteCartItemProps {
    title?: string,
    onClick?: () => void
}

const DeleteCartItem: FC<DeleteCartItemProps> = ({ title, onClick }) => {
    return <>
        <div className="d-flex flex-column w-75">
            <div style={{height:'4px',background:'#0085FF'}}></div>
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
            <span
                className="d-flex justify-content-center align-items-center pt-2 pb-1"
                style={{ fontSize: '20px', color: '#585757' }}>
                Только удалили
            </span>
        </div>

    </>;
}

export default DeleteCartItem;