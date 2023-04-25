import ButtonGrayChevron from "@/components/buttons/ButtonGrayChevron";
import Button from "../../components/buttons/Button";
import Link from "next/link";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import CollapseAntd from "@/components/collapse/CollapseAntd";




export default function () {

    return <>
        <h1>
            Buttons
        </h1>
        <Link href='/'>Back</Link>
        <hr />
        <Button counter={0} btn_style='gray' counter_style="gray">Button</Button>
        <Button btn_style='catalog-blue'>Button</Button>
        <Button btn_style='catalog-blue'>Button</Button>

        <ButtonGrayChevron icon={<MdChevronLeft fill="gray" />}></ButtonGrayChevron>
        <CollapseAntd title={'ButtonGrayChevron'} text={`<ButtonGrayChevron icon={<MdChevronLeft fill="gray" />}></ButtonGrayChevron>
         `}></CollapseAntd>

        <ButtonGrayChevron icon={<MdChevronRight />}></ButtonGrayChevron>
        <CollapseAntd title={'ButtonGrayChevron'} text={`<ButtonGrayChevron icon={<MdChevronRight />}></ButtonGrayChevron>
         `}></CollapseAntd>

    </>

}
<img src="./navbar.png" alt="" />