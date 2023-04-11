import { FC, ReactNode } from "react";


interface FilterButtonShowProps {
    children?: ReactNode,
    icon?: ReactNode,
    icon2?: ReactNode
    counter?: number,
    text_style?: string,
    counter_style?: string,
    title?: string,
}

function FilterButtonShow(props: FilterButtonShowProps) {
    return <button className='filter-btn-show mt-2 mb-2'>
        <span className='font-size-16-black fw-500'>{props.title}</span>
        <span className="filter-counter-up">{props.counter ?? 0}</span>
    </button>
}

export default FilterButtonShow;


// {`${btn_style ? 'my-btn-' + btn_style : 'btn-primary'}`} 