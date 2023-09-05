import {FC, useEffect, useRef} from "react";

interface CanvasProps {
    values: number[],
    width: number,
    height: number,
    tickCount?: number,
    lineWidth: number,
    valuesPosition: number[],
    ranksPos?: number[],
    ranks?: number[],
    onTransform?: (val: number) => string,
}

const Canvas: FC<CanvasProps> = ({
                                     width,
                                     height,
                                     values,
                                     tickCount = 4,
                                     valuesPosition,
                                     ranksPos,
                                     ranks,
                                     lineWidth,
                                     onTransform
                                 }) => {
    const canvasRef = useRef(null)


    const draw = (chart: any) => {

        chart.canvas.width = width;
        chart.canvas.height = height;
        var cw = chart.canvas.width;
        var ch = chart.canvas.height;

        // Расстояние для горизонтальных полос
        let h = [];
        for (let i = 0; i < tickCount; i++) {
            if (i == 0) {
                h[i] = ch
            } else {
                h[i] = ch - i * (ch / tickCount)
            }
        }

        // Отрисовка Значений X (числа(текст) + breakpoints + степени)
        let i = 0;
        let text;

        function breakpointsStyles(element: any,key:any) {
            element.classList.add('breakpoint')
            element.classList.add('prev-canvas-values')
            element.style.left = key - 2 + 'px';
        }

        for (let key in ranksPos) {
        // for (var i = 0; i < xAxisValues!.length; i++) {
            var xAxisValue = document.createElement('i');
            let breakpoint = document.createElement('div');
            let verticalLine = document.getElementById('xAxisValue');
            verticalLine?.classList.add('position-relative');

            let transformVal = onTransform ? onTransform(ranksPos[key]) : ranksPos[key];

            text = document.createTextNode(transformVal + '')
            xAxisValue.appendChild(text);
            verticalLine!.appendChild(breakpoint);
            breakpointsStyles(breakpoint,key)
            if (i % 2 === 0) { // Чётный индекс [i] == 0,2,4 ...
                xAxisValue.style.top = '-25px';
            } else { // Нечётный индекс [i] == 1,3,5 ...
                xAxisValue.style.top = '10px';
            }
            xAxisValue.classList.add('prev-canvas-values');
            xAxisValue.style.position = 'absolute';
            xAxisValue.style.fontSize = '14px';
            xAxisValue.style.left = key + 'px';
            document.getElementById('xAxisValue')!.appendChild(xAxisValue);
            i++;
        }

        // Отрисовка Значений Y
        // for (var i = yAxisValues.length - 1; i >= 0; i--) {
        //     var value = document.createElement('span');
        //     var text_value = document.createTextNode(yAxisValues[i])
        //     value.appendChild(text_value);
        //     document.getElementById('yAxisValues').appendChild(value);
        // }

        let percent = [];
        let k = valuesPosition.length - 1;
        // Расчитывает растояние для линий по Y от ширины X (в %)
        for (let i = 0; i < valuesPosition!.length; i++) {
            if (i == 0) {
                percent[i] = ch;
            } else {
                percent[i] = (valuesPosition![k] / ch * 100);
            }
            k--;
        }


        // Отрисовка вертикальных линий
        function gridV() {
            for (var i = 0; i < valuesPosition.length; i++) {
                chart.strokeStyle = '#ccc';
                chart.lineWidth = 1;
                chart.moveTo(valuesPosition[i], 0);
                chart.lineTo(valuesPosition[i], ch);
            }
            chart.stroke();
        }

        // Отрисовка горизонтальных линий
        function gridH() {
            for (var i = 0; i < tickCount; i++) {
                chart.strokeStyle = '#ccc';
                chart.lineWidth = 2;
                chart.moveTo(0, ch - i * (ch / tickCount));
                chart.lineTo(cw, ch - i * (ch / tickCount));
            }
            chart.stroke();
        }

        // gridH();
        // gridV();

        // Отрисовка линии на графике
        // var chrt = document.getElementById("chart");
        // chart.moveTo(0, chrt);
        // chart.beginPath();
        // chart.strokeStyle = '#0085FF';
        // chart.lineWidth = lineWidth;
        // for (var i = 0; i < valuesPosition.length; i++) {
        //     chart.lineTo(valuesPosition[i], percent[i]);
        //     // chart.lineTo(valuesPosition[i], ch - (percent[i] / 100 * ch));
        //     chart.stroke();
        // }
    }


    useEffect(() => {
        document.querySelectorAll('.prev-canvas-values').forEach(el => {
            if (el.classList.contains('prev-canvas-values')) {
                el.remove()
            }
        })
        const canvas: any = canvasRef.current;
        const context = canvas.getContext('2d');
        draw(context)
    }, [draw])

    return <>
        <div id="chart-wrapper">
            <div id="yAxisValues"></div>
            <canvas className="d-none" id="chart"
                    ref={canvasRef}
                    width={width}/>
            <div id='xAxisValue'/>
        </div>

    </>
}

export default Canvas;