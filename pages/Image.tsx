import { FC } from "react";
import ContentWrapper from "./ContentWrapper";
import Image from "next/image";

interface ImageProps {
    reference: any
}
 
const RefImage: FC<ImageProps> = ({reference}) => {
    return <ContentWrapper bg='#ccc'>
        <Image src={reference} alt="" />
    </ContentWrapper>;
}
 
export default RefImage;