
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { MdArrowCircleRight } from "react-icons/md";

interface LinkProps {
    title: string,
    link: string,
    description: string,
}


const CartComponent: FC<LinkProps> = ({ link, title, description }) => {
    const image = require(`.${link}/ref.png`) ?? '';

    return <div className="card mb-5" >
        <div className="p-5 d-flex justify-content-center           " style={{background: '#eee'}}>
            <div className="shadow-lg">
                <Image style={{maxHeight: 500, width: 'auto'}} src={image} alt={link} />
            </div>
        </div>
        <div className="card-body">
            <h5 className="card-title">{link}</h5>
            <p className="card-text">{description}</p>
            <Link href={link}>
                <button className="btn btn-primary text-white">{title} <MdArrowCircleRight size={25} /></button>
            </Link>
        </div>
    </div>
}

export default CartComponent;
