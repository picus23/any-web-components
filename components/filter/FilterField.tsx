import Image from "next/image";
import { FC, ReactNode } from "react";
import { MdChevronRight } from "react-icons/md";



export interface IHashLink {
    url: string,
    title: string,
}



interface FilterFieldProps {
    title?: string | ReactNode,
    onClick?: () => void,

    isActive?: boolean,
    isSelected?: boolean,
    isEmbedded?: boolean,

    links?: string[],
    icon?: ReactNode,
}

const FilterField: FC<FilterFieldProps> = ({ links, title, onClick, isActive = false, isSelected = false, isEmbedded = false, icon }) => {

    return <li><button role='button' tabIndex={0}

        className={
            'filter-field my-1 ' +
            (isSelected ? 'selected ' : '') +
            (isActive ? 'active ' : '')
        }
        onClick={onClick}>
        <div className="d-flex align-items-center">
            {
                icon
                    ? <span style={{ color: isActive ? '#fff' : '#aaa' }}>{icon}</span>
                    : <Image width={100} height={100} src={isActive ? "/kit/white_square.png" : "/kit/gray_square.png"} alt="" />

            }
            <span className="fw-400 ms-2 d-flex text-left" style={{ fontSize: '16px' }}>{title}</span>
        </div>
        <MdChevronRight size={24} fill={isActive ? 'white' : 'gray'} />
    </button>


        {


            // isActive && !!links && !!links.length && 
            links && !!links.length && <ol className="list-unstyled ms-4" style={{height: isActive ? links.length * 22 : 0, transition: 'all .3s', overflow: 'hidden'}}>

                {

                    links.map((title, index) =>
                        <li key={index}>
                            <a className="text-decoration-none" href={`#${title.replaceAll(' ', '_')}`}>
                                {title}
                            </a>
                        </li>
                    )

                }

            </ol>
        }
    </li >
}

export default FilterField;