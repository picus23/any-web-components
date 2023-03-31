import { ReactNode } from 'react'
import { MdFacebook } from 'react-icons/md'

interface FooterProps {
    logo: ReactNode,
}

function Footer(props: FooterProps) {
    return <div className='d-flex flex-column align-items-center py-4 bg-white w-100'>
        <div className='d-flex align-items-start px-4 gap-3'>
            <div className='d-flex flex-column'>
                {props.logo}
                <span className='font-size-16-gray'>Компания «Флюид-Лайн» является <br /> изготовителем и эксклюзивным <br /> дистрибьютором продукции A-flow, Hy-Lok, <br /> Drastar и HIFLUX в России и СНГ.</span>
                <div className='d-flex gap-3'>
                    {/* Facebook */}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H11.8808V15.1578H9.516V12.4913H11.8808V10.5249C11.8808 8.2427 13.3119 7 15.403 7C16.4047 7 17.265 7.07288 17.516 7.10528V9.49055L16.066 9.49129C14.929 9.49129 14.709 10.0177 14.709 10.7892V12.492H17.4207L17.0677 15.1585H14.709V22H18C20.2091 22 22 20.2091 22 18V6C22 3.79086 20.2091 2 18 2H6Z" fill="#969696" />
                    </svg>

                    {/* Twitter */}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M22 5.92417C21.2642 6.25083 20.4733 6.47083 19.6433 6.57C20.4908 6.0625 21.1417 5.25833 21.4475 4.3C20.655 4.77 19.7767 5.11167 18.8417 5.29583C18.0942 4.49833 17.0267 4 15.8467 4C13.1975 4 11.2508 6.47167 11.8492 9.0375C8.44 8.86667 5.41667 7.23333 3.3925 4.75083C2.3175 6.595 2.835 9.0075 4.66167 10.2292C3.99 10.2075 3.35667 10.0233 2.80417 9.71583C2.75917 11.6167 4.12167 13.395 6.095 13.7908C5.5175 13.9475 4.885 13.9842 4.24167 13.8608C4.76333 15.4908 6.27833 16.6767 8.075 16.71C6.35 18.0625 4.17667 18.6667 2 18.41C3.81583 19.5742 5.97333 20.2533 8.29 20.2533C15.9083 20.2533 20.2125 13.8192 19.9525 8.04833C20.7542 7.46917 21.45 6.74667 22 5.92417Z" fill="#969696" />
                    </svg>

                    {/* YouTube */}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.3458 5.15344C15.3425 4.94844 8.65333 4.94927 5.65417 5.15344C2.40667 5.3751 2.02417 7.33677 2 12.5001C2.02417 17.6543 2.40333 19.6243 5.65417 19.8468C8.65417 20.0509 15.3425 20.0518 18.3458 19.8468C21.5933 19.6251 21.9758 17.6634 22 12.5001C21.9758 7.34594 21.5967 5.37594 18.3458 5.15344ZM9.5 15.8334V9.16677L16.1667 12.4943L9.5 15.8334Z" fill="#969696" />
                    </svg>
                </div>
            </div>
            <div className='d-flex gap-3 justify-space-between'>
                <ul className='list-unstyled lh-2 mx-3'>
                    <li className='font-size-16-black fw-500'><strong>О Компании</strong></li>
                    <li className='font-size-16-gray'>Сертификаты</li>
                    <li className='font-size-16-gray'>Реквизиты</li>
                    <li className='font-size-16-gray'>Региональные <br />представительства</li>
                    <li className='font-size-16-gray'>Производители</li>
                </ul>
                <ul className='list-unstyled lh-2 mx-3'>
                    <li className='font-size-16-black fw-500'><strong>Title</strong></li>
                    <li className='font-size-16-gray'>First Link</li>
                    <li className='font-size-16-gray'>Second Link</li>
                    <li className='font-size-16-gray'>Third Link</li>
                </ul>
                <ul className='list-unstyled lh-2 mx-3'>
                    <li className='font-size-16-black fw-500'><strong>Title</strong></li>
                    <li className='font-size-16-gray'>First Link</li>
                    <li className='font-size-16-gray'>Second Link</li>
                </ul>
                <ul className='list-unstyled lh-2 mx-3'>
                    <li className='font-size-16-black fw-500'><strong>Title</strong></li>
                    <li className='font-size-16-gray'>First Link</li>
                    <li className='font-size-16-gray'>Second Link</li>
                    <li className='font-size-16-gray'>Third Link</li>
                </ul>
            </div>
        </div>
        <div className='footer-hr'></div>

        <div className='d-flex align-items-start justify-content-around mt-4 w-75'>
            <span className='font-size-13'>© ООО Fluid-line (Флюид-Лайн) Все права защищены 2023</span>
            <span className='font-size-13'>Сайт спроектирован Insaim</span>
        </div>


    </div>
}

export default Footer;