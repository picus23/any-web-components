import View from "@/system/components/View";

import filter_base from "./filter-base.png";

export default function () {


    return <>

        <div className="container">

            <h1>filter v2</h1>
            <View image={filter_base} component={() => {
                let FilterFields = ['1/4’’', '1/4’’', '1/4’’', '1/4’’', '1/4’’', '1/4’’', '1/4’’', '1/4’’', '1/4’’'];



                const code = `


                    <div>
                        <FilterTitle title="Подсоединения" />
                        <FilterHead title="BSPP Наружная" />
                        <FilterMarkerWrapper>
                            {
                                FilterFields.map(item => (
                                    <FilterMarker title={item} />
                                ))
                            }
                        </FilterMarkerWrapper>
                        <FilterHead title="BSPP Внутреняя" />
                        <FilterMarkerWrapper>
                            {
                                FilterFields.map(item => (
                                    <FilterMarker title={item} />
                                ))
                            }
                        </FilterMarkerWrapper>
                        <FilterButtonShow counter={1}>Показать ещё</FilterButtonShow>
                    </div>


                `

                return code
            }

            } />

        </div>

    </>



}