import Link from "next/link";
import CartComponent from "./CartComponent";



export default function Index() {
  return <div className="p-2">
    components galery
    <hr />





    <CartComponent link="/navbar" title="навигатор" description="" />
    <CartComponent link="/search" title="Подсказки для поиска" description="Комплекс компонентов специально разработаных для упрощения отображений подсказок поиска" />
    <CartComponent link="/footer" title="Footer" description="Комплекс компонентов специально разработаных для упрощения отображений" />
    <CartComponent link="/basket" title="Корзина" description="Комплекс компонентов специально разработаных для упрощения отображений" />
    <CartComponent link="/footer" title="Подвал" description="Комплекс компонентов специально разработаных для упрощения отображений" />
    <CartComponent link="/tableRow" title="Table Row" description="Комплекс компонентов специально разработаных для упрощения отображений" />
    <CartComponent link="/filter" title="Filter" description="Комплекс компонентов специально разработаных для упрощения отображений" />

    <br />

    <CartComponent link="/cartItem" title="Карта товара" description="" />

    {/* <Link href="/cartItem">Карта товара</Link> */}
    {/* <Link href="/tableRow">TableRow</Link> */}
    <br />
    <Link href="/buttons">Кнопочки</Link>
    <br />
    <Link href="/tableCell">Ячейки таблицы</Link>
    <br />
    <Link href="/catalogMenu">Каталог Меню</Link>
    <br />
    <Link href="/header">Шапка с поиском</Link>
    <br />
  </div>
}


