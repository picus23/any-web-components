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
    const keys = Object.keys(valuesCv).sort();
    const values = Object.values(valuesCv).sort();
    console.log('key',keys,'values',values)

    const maxValue = Object.keys(valuesCv).reduce((a, b) => valuesCv[a] > valuesCv[b] ? a : b);
    console.log('Max Value', maxValue)

    const lenghtValueCv = Object.keys(valuesCv).length
    console.log('Длина объекта', lenghtValueCv)

    const distanceBetweenValueOnSlider = maxValue / lenghtValueCv
    console.log('Расстояние между значениями', distanceBetweenValueOnSlider)


    const changeKeys = {};
    Object.values(valuesCv).sort().forEach((el, index) => {
        console.log('el',el)
        const distance = distanceBetweenValueOnSlider * index ;
        changeKeys[distance] = el;
    })
    const maxValueChange = Object.keys(changeKeys).reduce((a, b) => changeKeys[a] > changeKeys[b] ? a : b);


    return <>
        <SliderA
            range
            marks={changeKeys}
            tooltip={{formatter:null}}
        defaultValue={[0, maxValueChange]}
        max={maxValueChange}
        />



    </>
}

export default Slider;