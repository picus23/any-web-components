import { Context, FC, useContext } from "react"
import { MdCancel } from "react-icons/md"



interface MarkerProps {
    title: string,
    onClick?: () => void,
    onClose: () => void,
}


const Marker: FC<MarkerProps> = ({ title, onClick, onClose }) => {

    return <button
            className={`btn marker ${false ? 'btn-primary' : 'btn-outline-secondary'} d-inline-block me-1 px-3 btn-sm rounded-5 mb-1 bg-info-subtle text-emphasis-info`}
        >
            <span className="marker-title text-nowrap" onClick={onClick}>
                {title}
            </span>

            <span onClick={onClose}>
                <MdCancel className="d-inline-block ms-1"/>
            </span>
        </button>
}

export default Marker