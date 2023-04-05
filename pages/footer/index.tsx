import Link from "next/link";
import Footer from "../../components/footer/Footer";
import CollapseAntd from "../../components/collapse/CollapseAntd";

import reference from "./ref.png";
import Image from "next/image";

export default function () {

    return <>

        <h1>
            Футер
        </h1>
        <Link href='/'>Back</Link>
        <hr />

        <div className="container-xxl p-0" style={{ outline: '1px solid #000' }}>
            <Image src={reference} alt="" />
        </div>
        <div className="container-xxl p-0" style={{ outline: '1px solid #000' }}>

            <Footer></Footer>
        </div>

        <hr />

        <CollapseAntd title={'Footer'} text={''}></CollapseAntd>

    </>

}
