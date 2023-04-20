import { FC } from "react";
import { MdShoppingCart } from "react-icons/md";

interface ShoppingButtonProps {
    title?: string,
    value: number,
}

const ShoppingButton: FC<ShoppingButtonProps> = ({ title, value }) => {
    return <div className="d-flex" >
        <div className="input-group border rounded-3 m-0 me-1 ">
            <button className="btn btn-outline-secondary border-0 fw-bolt" type="button" id="button-addon1">
                -
            </button>
            <input type="number" className="form-control border-0 py-0 text-center" placeholder="" aria-describedby="button-addon1" style={{ width: 30 }} value={value} />
            <button className="btn btn-outline-secondary border-0  fw-bolt" type="button" id="button-addon1">
                +
            </button>
        </div>

        <button className="btn btn-primary d-flex gap-2 align-items-center" type="button" id="button-addon1">
            <MdShoppingCart size={23}/> {title}
        </button>
    </div>;
}

export default ShoppingButton;