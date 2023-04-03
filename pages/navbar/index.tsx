import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";
import Link from "next/link";


import reference from "./reference.png"


export default function () {

    return <>
        <h1>
            Navbar
        </h1>
        <Link href='/'>Back</Link>
        <hr />

        <div className="container-xxl p-0 outline">
            <Image src={reference} alt="" />
        </div>
        <hr />

    <div className="container-xxl outline">

        <Navbar logo={<svg width="144" height="48" viewBox="0 0 144 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M51.0085 21H52.8537V17.3949H56.4034V15.8736H52.8537V13.7941H56.7869V12.2727H51.0085V21Z" fill="#1C1C1C" />
            <path d="M57.994 21H59.8093V14.4546H57.994V21ZM58.9059 13.6108C59.4471 13.6108 59.8903 13.1975 59.8903 12.6904C59.8903 12.1875 59.4471 11.7742 58.9059 11.7742C58.369 11.7742 57.9258 12.1875 57.9258 12.6904C57.9258 13.1975 58.369 13.6108 58.9059 13.6108Z" fill="#1C1C1C" />
            <path d="M64.2123 23.5483C66.0831 23.5483 67.4126 22.696 67.4126 21.0639V14.4546H65.6101V15.554H65.5419C65.299 15.0213 64.7663 14.3693 63.6712 14.3693C62.2351 14.3693 61.0206 15.4858 61.0206 17.7145C61.0206 19.8921 62.201 20.9063 63.6754 20.9063C64.7195 20.9063 65.3033 20.3821 65.5419 19.8409H65.6186V21.0384C65.6186 21.8949 65.0433 22.2443 64.255 22.2443C63.4538 22.2443 63.049 21.8949 62.8998 21.5412L61.2209 21.7671C61.4382 22.7557 62.4481 23.5483 64.2123 23.5483ZM64.2507 19.5426C63.3601 19.5426 62.8743 18.8352 62.8743 17.706C62.8743 16.5938 63.3516 15.8139 64.2507 15.8139C65.1328 15.8139 65.6271 16.5597 65.6271 17.706C65.6271 18.8608 65.1243 19.5426 64.2507 19.5426Z" fill="#1C1C1C" />
            <path d="M68.8572 21H70.6726V17.071C70.6726 16.3466 71.1328 15.8651 71.7379 15.8651C72.3345 15.8651 72.7351 16.2742 72.7351 16.9176V21H74.495V17.0029C74.495 16.3253 74.8828 15.8651 75.5433 15.8651C76.1229 15.8651 76.5575 16.2273 76.5575 16.956V21H78.3686V16.598C78.3686 15.179 77.5248 14.3693 76.3061 14.3693C75.3473 14.3693 74.6016 14.8594 74.3331 15.6094H74.2649C74.0561 14.8509 73.3871 14.3693 72.4879 14.3693C71.6058 14.3693 70.9368 14.8381 70.6641 15.6094H70.5873V14.4546H68.8572V21Z" fill="#1C1C1C" />
            <path d="M81.669 21.1236C82.6364 21.1236 83.2628 20.7017 83.5824 20.0924H83.6335V21H85.3551V16.5852C85.3551 15.0256 84.0341 14.3693 82.5767 14.3693C81.0085 14.3693 79.9773 15.1193 79.7258 16.3125L81.4048 16.4489C81.5284 16.0142 81.9162 15.6946 82.5682 15.6946C83.1861 15.6946 83.5398 16.0057 83.5398 16.5426V16.5682C83.5398 16.9901 83.0923 17.0455 81.9545 17.1563C80.6591 17.2756 79.4957 17.7102 79.4957 19.1719C79.4957 20.4674 80.4204 21.1236 81.669 21.1236ZM82.1889 19.8708C81.6307 19.8708 81.2301 19.6108 81.2301 19.1122C81.2301 18.6009 81.652 18.3495 82.2912 18.26C82.6875 18.2046 83.3352 18.1108 83.5525 17.9659V18.6605C83.5525 19.3466 82.9858 19.8708 82.1889 19.8708Z" fill="#1C1C1C" />
            <path d="M54.1023 36C56.7614 36 58.3722 34.3551 58.3722 31.6279C58.3722 28.9091 56.7614 27.2727 54.1278 27.2727H51.0085V36H54.1023ZM52.8537 34.4191V28.8537H54.0298C55.6662 28.8537 56.5312 29.6889 56.5312 31.6279C56.5312 33.5753 55.6662 34.4191 54.0256 34.4191H52.8537Z" fill="#969696" />
            <path d="M62.6878 36.1279C64.3072 36.1279 65.3981 35.3395 65.6538 34.125L63.9748 34.0142C63.7915 34.5128 63.3228 34.7727 62.7177 34.7727C61.81 34.7727 61.2347 34.1719 61.2347 33.196V33.1918H65.6921V32.6932C65.6921 30.4688 64.3455 29.3693 62.6154 29.3693C60.6893 29.3693 59.4407 30.7372 59.4407 32.7571C59.4407 34.8324 60.6722 36.1279 62.6878 36.1279ZM61.2347 32.0668C61.2731 31.321 61.8398 30.7245 62.6452 30.7245C63.4336 30.7245 63.979 31.287 63.9833 32.0668H61.2347Z" fill="#969696" />
            <path d="M72.3228 31.321C72.1609 30.1151 71.1893 29.3693 69.5359 29.3693C67.8611 29.3693 66.7575 30.1449 66.7617 31.4063C66.7575 32.3864 67.3753 33.0213 68.6538 33.277L69.7873 33.5029C70.3583 33.6179 70.6182 33.8267 70.6268 34.1549C70.6182 34.5426 70.1964 34.8196 69.5614 34.8196C68.9137 34.8196 68.4833 34.5426 68.3725 34.01L66.587 34.1037C66.7575 35.3566 67.8228 36.1279 69.5572 36.1279C71.2532 36.1279 72.4677 35.2628 72.4719 33.9716C72.4677 33.0256 71.8498 32.4588 70.5799 32.1989L69.3952 31.9602C68.7859 31.8281 68.56 31.6193 68.5643 31.304C68.56 30.912 69.0032 30.6563 69.5657 30.6563C70.1964 30.6563 70.5714 31.0014 70.6609 31.4233L72.3228 31.321Z" fill="#969696" />
            <path d="M73.6151 36H75.4304V29.4546H73.6151V36ZM74.527 28.6108C75.0682 28.6108 75.5114 28.1975 75.5114 27.6904C75.5114 27.1875 75.0682 26.7742 74.527 26.7742C73.9901 26.7742 73.5469 27.1875 73.5469 27.6904C73.5469 28.1975 73.9901 28.6108 74.527 28.6108Z" fill="#969696" />
            <path d="M79.8334 38.5483C81.7042 38.5483 83.0337 37.696 83.0337 36.0639V29.4546H81.2312V30.554H81.163C80.9201 30.0213 80.3874 29.3693 79.2923 29.3693C77.8562 29.3693 76.6417 30.4858 76.6417 32.7145C76.6417 34.8921 77.8221 35.9063 79.2965 35.9063C80.3405 35.9063 80.9244 35.3821 81.163 34.8409H81.2397V36.0384C81.2397 36.8949 80.6644 37.2443 79.8761 37.2443C79.0749 37.2443 78.6701 36.8949 78.5209 36.5412L76.842 36.7671C77.0593 37.7557 78.0692 38.5483 79.8334 38.5483ZM79.8718 34.5426C78.9812 34.5426 78.4954 33.8352 78.4954 32.706C78.4954 31.5938 78.9727 30.8139 79.8718 30.8139C80.7539 30.8139 81.2482 31.5597 81.2482 32.706C81.2482 33.8608 80.7454 34.5426 79.8718 34.5426Z" fill="#969696" />
            <path d="M86.2937 32.2159C86.2979 31.3722 86.8008 30.8779 87.5337 30.8779C88.2624 30.8779 88.7013 31.3551 88.6971 32.1563V36H90.5124V31.8324C90.5124 30.3068 89.6175 29.3693 88.2539 29.3693C87.2823 29.3693 86.5792 29.8466 86.2851 30.6094H86.2084V29.4546H84.4783V36H86.2937V32.2159Z" fill="#969696" />
            <path d="M99.489 29.7827H101.257C101.232 28.2273 99.9535 27.1534 98.0103 27.1534C96.0969 27.1534 94.695 28.2102 94.7035 29.7955C94.6992 31.0824 95.6069 31.8196 97.0813 32.1733L98.0316 32.412C98.9819 32.6421 99.5103 32.9148 99.5146 33.5029C99.5103 34.1421 98.9052 34.5767 97.9677 34.5767C97.0089 34.5767 96.3185 34.1335 96.2589 33.26H94.4734C94.5202 35.1477 95.8711 36.1236 97.989 36.1236C100.12 36.1236 101.373 35.1051 101.377 33.5071C101.373 32.054 100.277 31.2827 98.7603 30.9418L97.9762 30.7543C97.2177 30.5796 96.5827 30.2983 96.5955 29.6719C96.5955 29.1094 97.0941 28.696 97.9975 28.696C98.8796 28.696 99.4208 29.0966 99.489 29.7827Z" fill="#969696" />
            <path d="M103.705 38.4418C105.055 38.4418 105.776 37.7557 106.142 36.7074L108.686 29.4631L106.764 29.4546L105.396 34.2614H105.328L103.973 29.4546H102.064L104.412 36.1875L104.305 36.4645C104.05 37.0568 103.611 37.0995 102.972 36.8992L102.562 38.2585C102.822 38.3651 103.244 38.4418 103.705 38.4418Z" fill="#969696" />
            <path d="M115.061 31.321C114.899 30.1151 113.928 29.3693 112.274 29.3693C110.599 29.3693 109.496 30.1449 109.5 31.4063C109.496 32.3864 110.114 33.0213 111.392 33.277L112.526 33.5029C113.097 33.6179 113.357 33.8267 113.365 34.1549C113.357 34.5426 112.935 34.8196 112.3 34.8196C111.652 34.8196 111.222 34.5426 111.111 34.01L109.325 34.1037C109.496 35.3566 110.561 36.1279 112.295 36.1279C113.991 36.1279 115.206 35.2628 115.21 33.9716C115.206 33.0256 114.588 32.4588 113.318 32.1989L112.134 31.9602C111.524 31.8281 111.298 31.6193 111.303 31.304C111.298 30.912 111.741 30.6563 112.304 30.6563C112.935 30.6563 113.31 31.0014 113.399 31.4233L115.061 31.321Z" fill="#969696" />
            <path d="M119.835 29.4546H118.603V27.8864H116.788V29.4546H115.893V30.8182H116.788V34.2273C116.779 35.51 117.653 36.1449 118.97 36.0895C119.439 36.0725 119.771 35.9787 119.954 35.9191L119.669 34.5682C119.579 34.5852 119.387 34.6279 119.217 34.6279C118.855 34.6279 118.603 34.4915 118.603 33.9887V30.8182H119.835V29.4546Z" fill="#969696" />
            <path d="M123.93 36.1279C125.549 36.1279 126.64 35.3395 126.896 34.125L125.217 34.0142C125.034 34.5128 124.565 34.7727 123.96 34.7727C123.052 34.7727 122.477 34.1719 122.477 33.196V33.1918H126.934V32.6932C126.934 30.4688 125.588 29.3693 123.858 29.3693C121.931 29.3693 120.683 30.7372 120.683 32.7571C120.683 34.8324 121.914 36.1279 123.93 36.1279ZM122.477 32.0668C122.515 31.321 123.082 30.7245 123.887 30.7245C124.676 30.7245 125.221 31.287 125.226 32.0668H122.477Z" fill="#969696" />
            <path d="M128.119 36H129.934V32.071C129.934 31.3466 130.395 30.8651 131 30.8651C131.596 30.8651 131.997 31.2742 131.997 31.9176V36H133.757V32.0029C133.757 31.3253 134.145 30.8651 134.805 30.8651C135.385 30.8651 135.819 31.2273 135.819 31.956V36H137.63V31.598C137.63 30.179 136.787 29.3693 135.568 29.3693C134.609 29.3693 133.863 29.8594 133.595 30.6094H133.527C133.318 29.8509 132.649 29.3693 131.75 29.3693C130.868 29.3693 130.199 29.8381 129.926 30.6094H129.849V29.4546H128.119V36Z" fill="#969696" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M28.9687 14.6966C30.2748 12.4852 29.9778 9.5891 28.0777 7.68905C25.8257 5.43698 22.1743 5.43698 19.9223 7.68905C18.0222 9.5891 17.7252 12.4852 19.0313 14.6966L14.6966 19.0313C12.4852 17.7252 9.5891 18.0222 7.68905 19.9223C5.43698 22.1743 5.43698 25.8257 7.68905 28.0777C9.5891 29.9778 12.4852 30.2748 14.6966 28.9687L19.0313 33.3034C17.7252 35.5148 18.0222 38.4109 19.9223 40.3109C22.1743 42.563 25.8257 42.563 28.0777 40.3109C29.9778 38.4109 30.2748 35.5148 28.9687 33.3034L33.3034 28.9687C35.5148 30.2748 38.4109 29.9778 40.3109 28.0777C42.563 25.8257 42.563 22.1743 40.3109 19.9223C38.4109 18.0222 35.5148 17.7252 33.3034 19.0313L28.9687 14.6966ZM13.8057 21.9611C14.9317 23.0872 14.9317 24.9128 13.8057 26.0389C12.6796 27.1649 10.854 27.1649 9.72792 26.0389C8.60187 24.9128 8.60189 23.0872 9.72792 21.9611C10.854 20.8351 12.6796 20.8351 13.8057 21.9611ZM16.7355 21.0702C17.7996 22.8719 17.7996 25.1282 16.7355 26.9298L21.0702 31.2645C22.8718 30.2004 25.1281 30.2004 26.9298 31.2645L31.2645 26.9298C30.2004 25.1281 30.2004 22.8719 31.2645 21.0702L26.9298 16.7355C25.1281 17.7996 22.8719 17.7996 21.0702 16.7355L16.7355 21.0702ZM38.2721 21.9611C39.3981 23.0872 39.3981 24.9128 38.2721 26.0389C37.146 27.1649 35.3204 27.1649 34.1943 26.0389C33.0683 24.9128 33.0683 23.0872 34.1943 21.9611C35.3204 20.8351 37.146 20.8351 38.2721 21.9611ZM26.0389 38.2721C27.1649 37.146 27.1649 35.3204 26.0389 34.1943C24.9128 33.0683 23.0872 33.0683 21.9611 34.1943C20.8351 35.3204 20.8351 37.146 21.9611 38.2721C23.0872 39.3981 24.9128 39.3981 26.0389 38.2721ZM26.0389 9.72792C27.1649 10.854 27.1649 12.6796 26.0389 13.8057C24.9128 14.9317 23.0872 14.9317 21.9611 13.8057C20.8351 12.6796 20.8351 10.854 21.9611 9.72792C23.0872 8.60189 24.9128 8.60187 26.0389 9.72792Z" fill="#0085FF" />
            <path opacity="0.4" d="M21 22.5C21 21.6716 21.6716 21 22.5 21H25.5C26.3284 21 27 21.6716 27 22.5V25.5C27 26.3284 26.3284 27 25.5 27H22.5C21.6716 27 21 26.3284 21 25.5V22.5Z" fill="#0085FF" />
        </svg>}
            type_navbar="my">
        </Navbar>
    </div>

    </>

}