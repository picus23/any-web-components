import { FC } from "react";
import { Slider as SliderA } from "antd";
import { SliderMarks } from "antd/es/slider";

interface propsForMarks {

}


interface SliderProps {
    valuesCv?: SliderMarks,
}

const Slider: FC<SliderProps> = ({ valuesCv }) => {
    // const sortedValues = Object.keys(valuesCv).sort();
    console.log('Изначальный вид', valuesCv)

    const maxValue = Object.keys(valuesCv).reduce((a, b) => valuesCv[a] > valuesCv[b] ? a : b);
    console.log('Max Value', maxValue)

    const minValue = Object.keys(valuesCv).reduce((a, b) => valuesCv[a] < valuesCv[b] ? a : b);
    console.log('min Value', minValue)

    const lenghtValueCv = Object.keys(valuesCv).length
    console.log('Длина объекта', lenghtValueCv)

    const distanceBetweenValueOnSlider = maxValue / lenghtValueCv
    console.log('Расстояние между значениями', distanceBetweenValueOnSlider)

    // const tempValuesCv = {};
    // Object.assign(tempValuesCv, valuesCv)
    // console.log('Temp', tempValuesCv)
    // console.log('ValueCv', valuesCv)

    const changeKeys = {};
    Object.values(valuesCv).sort().forEach((el, index) => {
        changeKeys[el] = distanceBetweenValueOnSlider * index;
    })

    Object.fromEntries(valuesCv).~((key,val) => {
        val,key;
    })
    console.log('Change', changeKeys)
    // Object.keys(valuesCv).forEach((key, value) => {
    //     console.log(key)
    //     console.log(value)
    //     changeKeys[value] = key
    //     console.log(changeKeys)
    // })

    // for (let i = 0; i < lenghtValueCv; i++) {
    //     changeKeys[keys[i]] = values[i];
    //     console.log(keys)
    //     console.log(values)
    // }

    // Object.keys(valuesCv).sort().forEach((el, index) => {
    //     changeKeys[el] = distanceBetweenValueOnSlider * index;
    //     valuesCv[el] = distanceBetweenValueOnSlider * index;
    // })

    // console.log('Ключи после переопределения valuesCv',valuesCv)
    // console.log('Ключи после переопределения changeKeys',changeKeys)




    return <>
        <SliderA
            range
            marks={valuesCv}
        // defaultValue={[minValue, maxValue]}
        // max={maxValue}
        // min={minValue}
        />



    </>
}

export default Slider;