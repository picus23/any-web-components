import { ReactNode } from 'react'
import { MdFacebook } from 'react-icons/md'

interface FooterProps {
    logo: ReactNode,
}

function Footer(props: FooterProps) {
    return <div className='py-4 bg-white'>
        <div className='d-flex align-items-start justify-content-around'>
            <div className='d-flex flex-column'>
                <div>
                    <img src="/kit/footer_logo.png" alt="" />
                </div>
                <span className='font-size-16-gray my-3'>Компания «Флюид-Лайн» является <br /> изготовителем и эксклюзивным <br /> дистрибьютором продукции A-flow, Hy-Lok, <br /> Drastar и HIFLUX в России и СНГ.</span>
                <div className='d-flex gap-3'>
                    {/* Facebook */}
                    <img src="/kit/Facebook.png" alt="" />
                    {/* Twitter */}
                    <img src="/kit/Twitter.png" alt="" />
                    {/* YouTube */}
                    <img src="/kit/Youtube.png" alt="" />
                </div>
            </div>
            <ul className='list-unstyled lh-2'>
                <li className='font-size-16-black fw-500'><strong>О Компании</strong></li>
                <li className='font-size-16-gray'>Сертификаты</li>
                <li className='font-size-16-gray'>Реквизиты</li>
                <li className='font-size-16-gray'>Региональные <br />представительства</li>
                <li className='font-size-16-gray'>Производители</li>
            </ul>
            <ul className='list-unstyled lh-2'>
                <li className='font-size-16-black fw-500'><strong>Title</strong></li>
                <li className='font-size-16-gray'>First Link</li>
                <li className='font-size-16-gray'>Second Link</li>
                <li className='font-size-16-gray'>Third Link</li>
            </ul>
            <ul className='list-unstyled lh-2'>
                <li className='font-size-16-black fw-500'><strong>Title</strong></li>
                <li className='font-size-16-gray'>First Link</li>
                <li className='font-size-16-gray'>Second Link</li>
            </ul>
            <ul className='list-unstyled lh-2'>
                <li className='font-size-16-black fw-500'><strong>Title</strong></li>
                <li className='font-size-16-gray'>First Link</li>
                <li className='font-size-16-gray'>Second Link</li>
                <li className='font-size-16-gray'>Third Link</li>
            </ul>
        </div>
        <div className="my-5 footer-hr"></div>

        <div className='d-flex align-items-start justify-content-around'>
            <span className='font-size-13'>© ООО Fluid-line (Флюид-Лайн) Все права защищены 2023</span>
            <span className='font-size-13'>Сайт спроектирован Insaim</span>
        </div>


    </div>
}

export default Footer;