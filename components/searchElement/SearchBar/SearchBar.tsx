import React, { FC, ReactNode } from 'react';
import FieldSeries from "../fields/FieldSeries";
import Button from "../../buttons/Button";
import FieldCategory from "../fields/FieldCategory";
import {MdSearch} from "react-icons/md";


interface SearchBarProps {
    children: ReactNode,
}
 
const SearchBar: FC<SearchBarProps> = ({children}) => {
    return <div className='border p-2 bg-white rounded'>
        {children}
    </div>;
}
 
export default SearchBar;



// export default function SearchBar() {

//     return <>
//         {/* Обычно окно поиска */}
//         <div className="search-hint">


//             <div className="search-hint-history">
//                 <span className="font-size-16-gray fw-500">Вы искали</span>
//                 <div className="row gap-3">
//                     <div className="col search-hint-img-text">
//                         <MdSearch />
//                         <span className="font-size-20 fw-500 mx-2">Hy-Lok- 3мм</span>
//                     </div>
//                     <div className="col search-hint-img-text">
//                         <MdSearch />
//                         <span className="font-size-20 fw-500 mx-2">Hy-Lok- 3мм</span>
//                     </div>
//                     <div className="col search-hint-img-text">
//                         <MdSearch />
//                         <span className="font-size-20 fw-500 mx-2">Hy-Lok- 3мм</span>
//                     </div>
//                 </div>
//             </div>

//             <div className="search-hint-search-often">
//                 <span className="font-size-16-gray fw-500">Часто ищут</span>
//                 <FieldCategory title={'Hy-Lok- 3мм'}></FieldCategory>
//                 <FieldCategory title={'Шаровые краны'}></FieldCategory>
//                 <FieldCategory title={'Микронные фильтры'}></FieldCategory>
//             </div>

//             <div className="search-hint-search-often">
//                 <span className="font-size-16-gray fw-500">Популярные категории</span>
//                 <FieldSeries title={'Фитинги для труб'} subtitle={'45 серия'} icon={<img src="/kit/empty_square.png" alt="" />}></FieldSeries>
//                 <FieldSeries title={'Шаровые краны'} subtitle={'45 серия'} icon={<img src="/kit/empty_square.png" alt="" />}></FieldSeries>
//                 <FieldSeries title={'Микронные фильтры'} subtitle={'45 серия'} icon={<img src="/kit/empty_square.png" alt="" />}></FieldSeries>
//             </div>

//         </div>
//     </>
// }