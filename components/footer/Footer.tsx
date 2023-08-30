import Image from 'next/image';
import Link from 'next/link';
import { ReactNode, FC } from 'react'
import { MdFacebook } from 'react-icons/md'

interface FooterProps {

}



const Footer: FC<FooterProps> = () => {
    return <div className='py-4 bg-white'>
        <div className='d-flex align-items-start px-4'>
            <div className='col footer-text'>
                <div>
                    <Image width={20} height={20} src="/kit/footer_logo.png" alt="" />
                </div>
                <div className='my-3 lh-1'>
                    <span className='font-size-16-gray'>Компания «Camozzi» является <br /> изготовителем и эксклюзивным <br /> дистрибьютором продукции #, #, <br /> # и # в СНГ.</span>
                </div>
                <div className='d-flex gap-3'>
                    {/* Facebook */}
                    <Image width={20} height={20} src="/kit/Facebook.png" alt="" />
                    {/* Twitter */}
                    <Image width={20} height={20} src="/kit/Twitter.png" alt="" />
                    {/* YouTube */}
                    <Image width={20} height={20} src="/kit/Youtube.png" alt="" />
                </div>
            </div>
            <div className='row flex-grow-1 gap-4'>
            <ul className='col list-unstyled lh-lg'>
                    <Link href="/about">
                        <li className='red_hover fw-500' style={{fontSize:16}}><strong>О Компании</strong></li>
                    </Link>
                    <Link className='text-decoration-none' href="/certificates">
                        <li className=''>Сертификаты</li>
                    </Link>
                    <Link className='text-decoration-none' href="/requisites">
                        <li className=''>Реквизиты</li>
                    </Link>
                    <Link className='text-decoration-none' href="/regional-representations">
                        <li className=''>Региональные <br />представительства</li>
                    </Link>
                    <Link className='text-decoration-none' href="/manufactures">
                        <li className=''>Производители</li>
                    </Link>
                </ul>
                <ul className='col list-unstyled lh-lg'>
                        <li className='font-size-16-black fw-500'><strong>Title</strong></li>
                        <li className='font-size-16-gray'>First Link</li>
                        <li className='font-size-16-gray'>Second Link</li>
                        <li className='font-size-16-gray'>Third Link</li>
                </ul>
                <ul className='col list-unstyled lh-lg'>
                    <li className='font-size-16-black fw-500'><strong>Title</strong></li>
                    <li className='font-size-16-gray'>First Link</li>
                    <li className='font-size-16-gray'>Second Link</li>
                </ul>
                <ul className='col list-unstyled lh-lg'>
                    <li className='font-size-16-black fw-500'><strong>Контакты</strong></li>
                    <li className='font-size-16-gray'>First Link</li>
                    <li className='font-size-16-gray'>Second Link</li>
                    <li className='font-size-16-gray'>Third Link</li>
                </ul>
            </div>
        </div>
        <div className="my-4 footer-hr"></div>

        <div className='d-flex justify-content-between px-4'>
            <div>
                <span className='font-size-13'>© ООО Camozzi (Камози) Все права защищены 2023</span>
            </div>
            <div>
            </div>
        </div>


    </div>
}

export default Footer;