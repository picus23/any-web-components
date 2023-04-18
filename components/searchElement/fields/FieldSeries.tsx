import { ReactNode } from 'react'
import { MdArrowForward } from 'react-icons/md'
import ButtonGrayArrow from '../../buttons/ButtonGrayArrow'

interface FieldSeriesProps {
    title: string,
    subtitle?: string,
    icon?: ReactNode,
    characteristics?: ReactNode[]
}


function FieldSeries(props: FieldSeriesProps) {
    return (
        <div className="search-field my-2">
            <div className='d-flex align-items-center'>
                {props.icon ?? <img src="/kit/empty_square.png" alt="" />}
                <div className="d-flex flex-column mx-2 justify-content-start">
                    <span className="font-size-20 fw-500">{props.title}</span>
                    {props.subtitle ? <span className="font-size-16-gray fw-500">{props.subtitle}</span> : false}
                </div>
            </div>
            <ButtonGrayArrow />
        </div>
    )
}

export default FieldSeries;


{/* <div className="row">
    <div className="col-2">
        <span className="font-size-13">Давление</span> <br />
        <span className="font-size-16-black fw-500">до 207 бар при 21°C</span>
    </div>
    <div className="col-2">
        <span className="font-size-13">Давление</span> <br />
        <span className="font-size-16-black fw-500">до 207 бар при 21°C</span>
    </div>
    <div className="col-2">
        <span className="font-size-13">Давление</span> <br />
        <span className="font-size-16-black fw-500">до 207 бар при 21°C</span>
    </div>
    <div className="d-flex flex-column col-2 justify-content-end align-items-end mr-2">
        <span className="font-size-13 mb-1">Итого</span>
        <span className="font-size-16-black fw-500">$214</span>
    </div>
</div> */}