import { ReactNode } from 'react'
import { MdFacebook } from 'react-icons/md'

interface FooterProps {
}

function Footer(props: FooterProps) {
    return <div className='py-4 bg-white'>
        <div className='d-flex align-items-start px-4'>
            <div className='col footer-text'>
                <div>
                    <img src="/kit/footer_logo.png" alt="" />
                </div>
                <div className='my-3 lh-1'>
                    <span className='font-size-16-gray'>Компания «Флюид-Лайн» является <br /> изготовителем и эксклюзивным <br /> дистрибьютором продукции A-flow, Hy-Lok, <br /> Drastar и HIFLUX в России и СНГ.</span>
                </div>
                <div className='d-flex gap-3'>
                    {/* Facebook */}
                    <img src="/kit/Facebook.png" alt="" />
                    {/* Twitter */}
                    <img src="/kit/Twitter.png" alt="" />
                    {/* YouTube */}
                    <img src="/kit/Youtube.png" alt="" />
                </div>
            </div>
            <div className='row flex-grow-1 gap-4'>

                <ul className='col list-unstyled lh-lg'>
                    <li className='font-size-16-black fw-500'><strong>О Компании</strong></li>
                    <li className='font-size-16-gray'>Сертификаты</li>
                    <li className='font-size-16-gray'>Реквизиты</li>
                    <li className='font-size-16-gray'>Региональные <br />представительства</li>
                    <li className='font-size-16-gray'>Производители</li>
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
                <span className='font-size-13'>© ООО Fluid-line (Флюид-Лайн) Все права защищены 2023</span>
            </div>
            <div>
                <span className='font-size-13'>Сайт спроектирован Insaim</span>
            </div>
        </div>


    </div>
}

export default Footer;