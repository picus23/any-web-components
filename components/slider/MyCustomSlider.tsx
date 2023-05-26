import { FC } from "react";

interface MyCustomSliderProps {
    valuesFromSlider: number[],
}



const MyCustomSlider: FC<MyCustomSliderProps> = ({ valuesFromSlider }) => {
    return <>
        <div className="range">
            <input
                id="from-slider"
                className="custom-slider"
                type="range"
                min="0"
                max='100'
                defaultValue={60}
            />
            <input
                id="to-slider"
                className="custom-slider"
                type="range"
                min='0'
                max='100'
                defaultValue={30}
            />
        </div>

        <ul className="range-labels">
            {
                valuesFromSlider.map(value => {
                    return <li>{value}</li>
                })
            }
        </ul>
    </>;
}

export default MyCustomSlider;