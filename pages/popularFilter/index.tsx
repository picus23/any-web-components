import { FC } from "react";
import reference from "./ref.png";
import Link from "next/link";
import Image from "next/image";
import FilterCategory from "@/components/filter/FilterCategory";

interface IndexProps {
    
}
 
const Index: FC<IndexProps> = () => {
    return <>
    <h1>
        Popular filter
    </h1>
    <Link href='/'>Back</Link>
    <hr />


    <div className="container-xxl p-0" style={{ outline: '1px solid #000' }}>
        <Image src={reference} alt="" />
    </div>

    <hr />

    <div className="container-xxl" style={{ outline: '1px solid #000' }}>
        <FilterCategory title="Шаровые краны" onClick={() => alert(111)} />
    </div>

    <hr />


    {/* <CollapseAntd title="Popular filter" text="<Navbar type_navbar="my"></Navbar>"></CollapseAntd> */}

</>
}
 
export default Index;