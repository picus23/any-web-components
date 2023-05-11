import { FC } from "react";
import { Slider as SliderA } from "antd";
import { SliderMarks } from "antd/es/slider";

interface propsForMarks {

}


interface SliderProps {
    valuesCv?: SliderMarks,
}

const Slider: FC<SliderProps> = ({ valuesCv }) => {
    console.log('Изначальный вид', valuesCv)
    const keys = Object.keys(valuesCv).sort((a,b) => valuesCv[a] - valuesCv[b]);
    const values = Object.values(valuesCv).sort((a,b) => valuesCv[a] - valuesCv[b]);
    console.log('key',keys,'values',values)


    const maxValue = Object.values(valuesCv).reduce((a, b) => valuesCv[a] > valuesCv[b] ? a : b);
    console.log('Max Value', maxValue)

    const lenghtValueCv = Object.keys(valuesCv).length
    console.log('Длина объекта', lenghtValueCv)

    const distanceBetweenValueOnSlider = maxValue / lenghtValueCv
    console.log('Расстояние между значениями', distanceBetweenValueOnSlider)




    console.log('valueCV before',valuesCv)

    const changeKeys = {};
    for (let i = 0; i < lenghtValueCv; i++) {
        const distance = distanceBetweenValueOnSlider * i;
        changeKeys[distance] = values[i] + ' cv';        
    }
    
    // Object.values(valuesCv).sort().forEach((el, index) => {
    //     console.log('el',el)
    //     const distance = distanceBetweenValueOnSlider * index ;
    //     changeKeys[distance] = el;
    // })

    console.log('valueCVafter',changeKeys)






    const maxValueChange = Object.keys(changeKeys).reduce((a, b) => changeKeys[a] > changeKeys[b] ? a : b);


    return <>
        <SliderA
            range
            marks={changeKeys}
            tooltip={{formatter:null}}
        defaultValue={[0, values[values.length-1]]}
        // defaultValue={[0, values[values.length-1]]}
        max={maxValueChange}
        />



    </>
}

export default Slider;