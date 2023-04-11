import Link from "next/link";
import Footer from "../../components/footer/Footer";
import CollapseAntd from "../../components/collapse/CollapseAntd";

import reference from "./ref.png";
import Image from "next/image";
import Filter from "@/components/filter/Filter";
import FilterCategory from "@/components/filter/FilterCategory";
import { MdChevronRight, MdOutlineSegment, MdUnfoldMore } from "react-icons/md";
import FilterChips from "@/components/filter/FilterChips";
import FilterMarker from "@/components/filter/FilterMarker";
import FilterHead from "@/components/filter/FilterHead";
import FilterField from "@/components/filter/FilterField";
import { Input } from "@/components/inputs/Input";
import { InputSwitch } from "@/components/inputs/InputSwitch";

export default function () {

    return <>

        <h1>
            Filter
        </h1>
        <Link href='/'>Back</Link>
        <hr />

        <div className="container-xxl d-flex justify-content-center p-0" style={{ outline: '1px solid #000;background:#eee' }}>
            <Image src={reference} alt="" />
        </div>

        <div className="container-xxl justify-content-center p-0" style={{ outline: '1px solid #000;background:#eee' }}>

            <div className="d-flex flex-column gap-2">
                <Filter>

                    <FilterCategory><span className="font-size-16-gray">Шаровые краны</span></FilterCategory>
                    <CollapseAntd title={'FilterCategory'} text={`
         <FilterCategory><span className="font-size-16-gray">Шаровые краны</span></FilterCategory>
         `}></CollapseAntd>

                    <FilterChips><span className="font-size-16-gray text-overflow">Hy-Lok 3ммHy-Lok 3ммHy-Lok 3ммHy-Lok 3мм</span></FilterChips>
                    <CollapseAntd title={'FilterChips'} text={`
                    <FilterChips><span className="font-size-16-gray text-overflow">Hy-Lok 3ммHy-Lok 3ммHy-Lok 3ммHy-Lok 3мм</span></FilterChips>
        `}></CollapseAntd>

                    <FilterChips><span className="font-size-16-gray text-overflow">Hy-Lok 3мм</span></FilterChips>
                    <CollapseAntd title={'FilterChips'} text={`
         <FilterChips><span className="font-size-16-gray text-overflow">Hy-Lok 3мм</span></FilterChips>
        `}></CollapseAntd>

                    <FilterMarker><Input style="square-gray" /><span className="font-size-16-gray text-overflow">1/4’’</span></FilterMarker>
                    <CollapseAntd title={'FilterMarker'} text={`
         <FilterMarker><Input style="square-gray" /><span className="font-size-16-gray text-overflow">1/4’’</span></FilterMarker>
        `}></CollapseAntd>

                    <FilterHead><img src="/kit/filter_head_img.png" alt="" /><span className="font-size-16-black fw-500 ms-2">BSPP Наружная</span></FilterHead>
                    <CollapseAntd title={'FilterHead'} text={`
         <FilterHead><img src="/kit/filter_head_img.png" alt="" /><span className="font-size-16-black fw-500 ms-2">BSPP Наружная</span></FilterHead>
        `}></CollapseAntd>

                    <FilterField field_style="filter-field-blue justify-content-between">
                        <div className="d-flex align-items-center">
                            <Input style="square-white" />
                            <span className="fw-500 ms-2">Подсоединение</span>
                        </div>
                        <MdChevronRight size={24} fill="white" />
                    </FilterField>
                    <CollapseAntd title={'FilterField'} text={`
         <FilterField field_style="filter-field-blue justify-content-between">
                        <div className="d-flex align-items-center">
                            <Input style="square-white" />
                            <span className="fw-500 ms-2">Подсоединение</span>
                        </div>
                        <MdChevronRight size={24} fill="white" />
                    </FilterField>
        `}></CollapseAntd>

                    <FilterField field_style="filter-field-white justify-content-between">
                        <div className="d-flex align-items-center">
                            <Input style="square-gray" />
                            <span className="fw-500 ms-2">Тип иглы</span>
                        </div>
                        <MdChevronRight size={24} fill="gray" />
                    </FilterField>
                    <CollapseAntd title={'FilterField'} text={`
         <FilterField field_style="filter-field-white justify-content-between">
         <div className="d-flex align-items-center">
             <Input style="square-gray" />
             <span className="fw-500 ms-2">Тип иглы</span>
         </div>
         <MdChevronRight size={24} fill="gray" />                   
     </FilterField>
         `}></CollapseAntd>

                    <InputSwitch></InputSwitch>
                    <CollapseAntd title={'InputSwitch'} text={`
         <InputSwitch></InputSwitch>
        `}></CollapseAntd>

                </Filter>
            </div>

        </div >

        <hr />

        <CollapseAntd title={'Filter'} text={`
         
        `}></CollapseAntd>

    </>

}
