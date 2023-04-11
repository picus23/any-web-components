import Image from "next/image";
import { FC } from "react";
import reference from "./ref_content.png";
import CollapseAntd from "@/components/collapse/CollapseAntd";
import ContentWrapper from "../ContentWrapper";
import RefImage from "../Image";
import FilterHead from "@/components/filter/FilterHead";

interface ContentListProps {

}

const ContentList: FC<ContentListProps> = () => {
    return <div className="my-5">

        <RefImage reference={reference}/>
        

        <ContentWrapper width={571} padding={15}>
            <FilterHead title={'BSPP Наружная'}>

        </ContentWrapper>


        <ContentWrapper width={'100%'}>
            <CollapseAntd title={'content list'} text={`123123`} />
        </ContentWrapper>
    </div>;
}

export default ContentList;