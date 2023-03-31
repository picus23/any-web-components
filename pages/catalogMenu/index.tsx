import CatalogMenu from "@/components/catalogMenu/CatalogMenu";
import Link from "next/link";



var categories = ['Трубные','Резьбовые','Под приварку','Под шланги'];
export default function () {

    return <>
        <h1>
        CatalogMenu
        </h1>
        <Link href='/'>Back</Link>
        <hr />
        <div className="catalog-menu">
            <CatalogMenu title={'Фитинги для труб Hy-Lok'} series={'45 серий'} categories={categories}></CatalogMenu>
            <CatalogMenu title={'Фитинги для труб Hy-Lok'} series={'45 серий'} categories={categories}></CatalogMenu>
            <CatalogMenu title={'Фитинги для труб Hy-Lok'} series={'45 серий'} categories={categories}></CatalogMenu>
            <CatalogMenu title={'Фитинги для труб Hy-Lok'} series={'45 серий'} categories={categories}></CatalogMenu>
            <CatalogMenu title={'Фитинги для труб Hy-Lok'} series={'45 серий'} categories={categories}></CatalogMenu>
            <CatalogMenu title={'Фитинги для труб Hy-Lok'} series={'45 серий'} categories={categories}></CatalogMenu>
            <CatalogMenu title={'Фитинги для труб Hy-Lok'} series={'45 серий'} categories={categories}></CatalogMenu>
            <CatalogMenu title={'Фитинги для труб Hy-Lok'} series={'45 серий'} categories={categories}></CatalogMenu>
            <CatalogMenu title={'Фитинги для труб Hy-Lok'} series={'45 серий'} categories={categories}></CatalogMenu>


        </div>
        
    </>

}
<img src="./navbar.png" alt="" />