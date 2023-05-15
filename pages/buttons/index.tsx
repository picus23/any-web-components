import ButtonGrayChevron from "@/components/buttons/ButtonGrayChevron";
import Button from "../../components/buttons/Button";
import Link from "next/link";
import { MdChevronLeft, MdChevronRight, MdShoppingCart } from "react-icons/md";
import CollapseAntd from "@/components/collapse/CollapseAntd";
import ButtonGrayAddRemove from "@/components/buttons/ButtonGrayAddRemove";
import ButtonBuy from "@/components/buttons/ButtonBuy";




export default function () {

    return <>
        <h1>
            Buttons
        </h1>
        <Link href='/'>Back</Link>
        <hr />
        <div className="d-flex flex-column gap-2">

            <div style={{ width: 'max-content' }}>
                <Button counter={0} btn_style='btn-secondary'>Button</Button>
            </div>

            <Button btn_style='btn-primary'>Button</Button>

            <Button btn_style='btn-primary'>Button</Button>


            <div style={{ width: 'max-content' }}>
                <ButtonGrayChevron icon={<MdChevronLeft fill="gray" />}></ButtonGrayChevron>
            </div>
            <CollapseAntd title={'ButtonGrayChevron'} text={`<ButtonGrayChevron icon={<MdChevronLeft fill="gray" />}></ButtonGrayChevron>
         `}></CollapseAntd>

            <div style={{ width: 'max-content' }}>
                <ButtonGrayChevron icon={<MdChevronRight />}></ButtonGrayChevron>
            </div>
            <CollapseAntd title={'ButtonGrayChevron'} text={`<ButtonGrayChevron icon={<MdChevronRight />}></ButtonGrayChevron>
         `}></CollapseAntd>

            <div style={{ width: 'max-content' }}>
                <ButtonGrayAddRemove 
                counter={1}
                onClickAdd={()=>alert('click')}
                onClickRemove={()=>alert('click')}  />
            </div>
            <CollapseAntd title={'ButtonGrayAddRemove'} text={`<ButtonGrayAddRemove></ButtonGrayAddRemove>
         `}></CollapseAntd>

            <div style={{ width: 'max-content' }}>
                <ButtonBuy btn_style='blue' icon={<MdShoppingCart size={20} fill={'#fff'} />}>Купить</ButtonBuy>
            </div>
            <CollapseAntd title={'ButtonBuyBlue'} text={`<ButtonBuy btn_style='blue' icon={<MdShoppingCart size={20} fill={'#fff'} />}>Купить</ButtonBuy>
         `}></CollapseAntd>

            <div style={{ width: 'max-content' }}>
                <ButtonBuy btn_style='gray' icon={<MdShoppingCart size={20} fill={'#969696'} />}>Корзина</ButtonBuy>
            </div>
            <CollapseAntd title={'ButtonBuyGray'} text={`<ButtonBuy btn_style='gray' icon={<MdShoppingCart size={20} fill={'#969696'} />}>Корзина</ButtonBuy>
         `}></CollapseAntd>




        </div>
    </>

}
<img src="./navbar.png" alt="" />