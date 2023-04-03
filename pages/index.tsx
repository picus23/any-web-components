import Link from "next/link"


export default function Index() {
  return <>
      components galery
      <hr/>
      <Link href="/buttons">Кнопочки</Link>
      <br />
      <Link href="/navbar">Шапка</Link>
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


