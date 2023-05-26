import { FC, useState, useEffect } from "react";
import CanvasTest from "./CanvasTest";
import ExpoSliderTest from "./ExpoSliderTest";

interface WrapperSliderProps {
    width: number,
    values: number[],
    onChange?: () => void,
}

const WrapperSlider: FC<WrapperSliderProps> = ({ width, values, onChange }) => {
    return <>
        <div style={{ margin: '20px 0' }} />
        <ExpoSliderTest
            // dataToWrapper={dataToWrapper}
            valuesCv={values}
            onChange={onChange}
            widthCanvas={width}

        />
    </>;
}

export default WrapperSlider;