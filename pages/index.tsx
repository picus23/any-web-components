import Link from "next/link";
import CartComponent from "./CartComponent";



export default function Index() {
  return <div className="p-2">
    components galery
    <hr />





    <CartComponent link="/navbar" title="навигатор" description="" />
    <CartComponent link="/search" title="Подсказки для поиска" description="Комплекс компонентов специально разработаных для упрощения отображений подсказок поиска" />
    <CartComponent link="/footer" title="Footer" description="Комплекс компонентов специально разработаных для упрощения отображений подсказок поиска" />

    <br />

    <CartComponent link="/cartItem" title="Карта товара" description="" />

    {/* <Link href="/cartItem">Карта товара</Link> */}
    <br />
    <Link href="/buttons">Кнопочки</Link>
    <br />
    <Link href="/tableCell">Ячейки таблицы</Link>
    <br />
    <Link href="/catalogMenu">Каталог Меню</Link>
    <br />
    <Link href="/header">Шапка с поиском</Link>
    <br />
    <Link href="/tableRow">TableRow</Link>
  </div>
}


