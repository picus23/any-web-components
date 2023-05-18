import Link from "next/link";
import CartComponent from "./CartComponent";



export default function Index() {
  return <div className="p-2">

    <CartComponent link="/slider" title="Слайдер" description="" />
    <CartComponent link="/navbar" title="навигатор" description="" />
    <CartComponent link="/search" title="Подсказки для поиска" description="* подсказок поиска" />
    <CartComponent link="/footer" title="Footer" description="*" />
    <CartComponent link="/basket" title="Корзина" description="*" />
    <CartComponent link="/footer" title="Подвал" description="*" />
    <CartComponent link="/tableRow" title="Table Row" description="*" />
    <CartComponent link="/filter" title="Filter" description="*" />
    <CartComponent link="/popularFilter" title="Popular Filter" description="ну нафиг" />
    <CartComponent link="/encoding" title="Кодировки" description="" />

  </div>
}


