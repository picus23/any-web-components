import Image from "next/image"
import Link from "next/link"
import ImgLink from "./ImgLink"


export default function Index() {
  return <>
      components galery
      <hr/>
      
      <Link href="/buttons">Кнопочки</Link>

      <br />
      
      {/* <Link href="/navbar">Шапка</Link>
       */}
       <ImgLink link="/navbar"/>
      <br />
      <Link href="/cartItem">Карта товара</Link>
      <br />
      <Link href="/tableCell">Ячейки таблицы</Link>
      <br />
      <Link href="/catalogMenu">Каталог Меню</Link>
      <br />
      <Link href="/header">Шапка с поиском</Link>
      <br />
      <Link href="/footer">Футер</Link>
      <br />
      <Link href="/tableRow">TableRow</Link>
    </>
}


