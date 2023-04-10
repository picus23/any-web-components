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

            <Filter>
                <div className="col-2 gap-2">
                    <FilterCategory><span className="font-size-16-gray">Шаровые краны</span></FilterCategory>
                    <FilterChips><span className="font-size-16-gray text-overflow">Hy-Lok 3ммHy-Lok 3ммHy-Lok 3ммHy-Lok 3мм</span></FilterChips>
                    <FilterChips><span className="font-size-16-gray text-overflow">Hy-Lok 3мм</span></FilterChips>
                    <FilterMarker><span className="font-size-16-gray text-overflow">1/4’’</span></FilterMarker>
                    <FilterHead><img src="/kit/filter_head_img.png" alt="" /><span className="font-size-16-black fw-500 ms-2">BSPP Наружная</span></FilterHead>
                    
                    <FilterField field_style="filter-field-blue justify-content-between">
                        <div className="d-flex align-items-center">
                            <Input style="square-white" />
                            <span className="fw-500 ms-2">Подсоединение</span>
                        </div>
                        <MdChevronRight size={24} fill="white" />
                    </FilterField>
                    
                    <FilterField field_style="filter-field-white justify-content-between">
                        <div className="d-flex align-items-center">
                            <Input style="square-gray" />
                            <span className="fw-500 ms-2">Тип иглы</span>
                        </div>
                        <MdChevronRight size={24} fill="gray" />                   
                    </FilterField>

<InputSwitch></InputSwitch>

                </div>
            </Filter>

        </div >

        <hr />

        <CollapseAntd title={'Filter'} text={`
         <Footer>
         <div className='py-4 bg-white'>
             <div className='d-flex align-items-start px-4'>

                 <div className='col footer-text'>
                     <div>
                         <img src="/kit/footer_logo.png" alt="" />
                     </div>
                     <div className='my-3 lh-1'>
                         <span className='font-size-16-gray'>Компания «Флюид-Лайн» является <br /> изготовителем и эксклюзивным <br /> дистрибьютором продукции A-flow, Hy-Lok, <br /> Drastar и HIFLUX в России и СНГ.</span>
                     </div>
                     <div className='d-flex gap-3'>
                         {/* Facebook */}
                         <img src="/kit/Facebook.png" alt="" />
                         {/* Twitter */}
                         <img src="/kit/Twitter.png" alt="" />
                         {/* YouTube */}
                         <img src="/kit/Youtube.png" alt="" />
                     </div>
                 </div>

                 <div className='row flex-grow-1 gap-4'>
                     <ul className='col list-unstyled lh-lg'>
                         <li className='font-size-16-black fw-500'><strong>О Компании</strong></li>
                         <li className='font-size-16-gray'>Сертификаты</li>
                         <li className='font-size-16-gray'>Реквизиты</li>
                         <li className='font-size-16-gray'>Региональные <br />представительства</li>
                         <li className='font-size-16-gray'>Производители</li>
                     </ul>
                     <ul className='col list-unstyled lh-lg'>
                         <li className='font-size-16-black fw-500'><strong>Title</strong></li>
                         <li className='font-size-16-gray'>First Link</li>
                         <li className='font-size-16-gray'>Second Link</li>
                         <li className='font-size-16-gray'>Third Link</li>
                     </ul>
                     <ul className='col list-unstyled lh-lg'>
                         <li className='font-size-16-black fw-500'><strong>Title</strong></li>
                         <li className='font-size-16-gray'>First Link</li>
                         <li className='font-size-16-gray'>Second Link</li>
                     </ul>
                     <ul className='col list-unstyled lh-lg'>
                         <li className='font-size-16-black fw-500'><strong>Контакты</strong></li>
                         <li className='font-size-16-gray'>First Link</li>
                         <li className='font-size-16-gray'>Second Link</li>
                         <li className='font-size-16-gray'>Third Link</li>
                     </ul>
                 </div>
             </div>
             
             <div className="my-4 footer-hr"></div>

             <div className='d-flex justify-content-between px-4'>
                 <div>
                     <span className='font-size-13'>© ООО Fluid-line (Флюид-Лайн) Все права защищены 2023</span>
                 </div>
                 <div>
                     <span className='font-size-13'>Сайт спроектирован Insaim</span>
                 </div>
             </div>
         </div>
     </Footer>
        `}></CollapseAntd>

    </>

}
