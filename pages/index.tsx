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
    </>
}


