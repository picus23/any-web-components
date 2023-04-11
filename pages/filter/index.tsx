import Link from "next/link";
import Footer from "../../components/footer/Footer";
import CollapseAntd from "../../components/collapse/CollapseAntd";

import reference from "./ref.png";
import search_input from "./search_input.png";
import Image from "next/image";
import Filter from "@/components/filter/Filter";
import FilterCategory from "@/components/filter/FilterCategory";
import { MdChevronRight, MdOutlineSegment, MdUnfoldMore } from "react-icons/md";
import FilterChips from "@/components/filter/FilterChips";
import FilterMarker from "@/components/filter/FilterMarker";
import FilterHead from "@/components/filter/FilterHead";
import { Input } from "@/components/inputs/Input";
import { InputSwitch } from "@/components/inputs/InputSwitch";
import FilterField from "@/components/filter/FilterField";
import FilterSearchInput from "@/components/filter/FilterSearchInput";

export default function () {

    return <>

        <h1>
            Filter
        </h1>
        <Link href='/'>Back</Link>
        <hr />

        {/* <div className="container-xxl d-flex justify-content-center p-0" style={{ outline: '1px solid #000;background:#eee' }}>
            <Image src={reference} alt="" />
        </div> */}
        <h1>Образец</h1>
        <div className="container-xxl d-flex justify-content-center p-0" style={{ outline: '1px solid #000;background:#eee' }}>
            <Image src={search_input} alt="" />
        </div>
        <h1>Мой</h1>
        <div className="container-xxl d-flex justify-content-center p-0" style={{ outline: '1px solid #000;background:#eee' }}>
            <FilterSearchInput title="Все фильтры" />
        </div>

        <div className="container-xxl justify-content-center p-0" style={{ outline: '1px solid #000;background:#eee' }}>

            <div className="d-flex flex-column gap-2">
                <Filter>

                    <FilterCategory title="Шаровые краны" onClick={() => alert(111)} />
                    <CollapseAntd title={'FilterCategory'} text={`
         <FilterCategory title="Шаровые краны" onClick={() => alert(111)} />
         `}></CollapseAntd>

                    <FilterChips title="Hy-Lok 3ммHy-Lok 3ммHy-Lok 3ммHy-Lok 3мм" onClick={() => alert(111)} />
                    <CollapseAntd title={'FilterChips'} text={`
                    <FilterChips title="Hy-Lok 3ммHy-Lok 3ммHy-Lok 3ммHy-Lok 3мм" onClick={() => alert(111)} />
        `}></CollapseAntd>

                    <FilterChips title="Hy-Lok 3мм" onClick={() => alert(111)} />
                    <CollapseAntd title={'FilterChips'} text={`
         <FilterChips title="Hy-Lok 3мм" onClick={() => alert(111)} />
        `}></CollapseAntd>

                    <FilterMarker title="1/4’’" />
                    <CollapseAntd title={'FilterMarker'} text={`
         <FilterMarker title="1/4’’" />
        `}></CollapseAntd>

                    <FilterHead title="BSPP Наружная" />
                    <CollapseAntd title={'FilterHead'} text={`
                    <FilterHead title="BSPP Наружная" />  //Можно передать img (<img src={img} alt="" />)
        `}></CollapseAntd>

                    <FilterField isActive title="Подсоединение" onClick={() => alert(111)} />
                    <CollapseAntd title={'FilterField Active'} text={`
         <FilterField isActive title="Подсоединение" onClick={() => alert(111)} />  ё           
         `}></CollapseAntd>

                    <FilterField title="Тип иглыТип иглыТип иглы" onClick={() => alert('Click')} />
                    <CollapseAntd title={'FilterField'} text={`
         <FilterField title="Тип иглы" onClick={() => alert('Click')} />
        `}></CollapseAntd>

                    <FilterField isSelected title="Категория" onClick={() => alert('Click')} />
                    <CollapseAntd title={'FilterField Selected'} text={`
         <FilterField isSelected title="Категория" onClick={() => alert('Click')} />
        `}></CollapseAntd>


                    <InputSwitch></InputSwitch>
                    <CollapseAntd title={'InputSwitch'} text={`
         <InputSwitch></InputSwitch>
        `}></CollapseAntd>

                </Filter>
            </div>

        </div >

        <hr />


    </>

}
