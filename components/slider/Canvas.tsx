import { FC, useEffect, useRef } from "react";

interface CanvasProps {
    valuesCv: number[],
    width: number,
    height: number,
    tickCount?: number,
    valuesFromSlider: number[],
    rank?: number[],
    indexOrder: string,
}

const Canvas: FC<CanvasProps> = ({ width, height, valuesCv, tickCount = 4, valuesFromSlider, rank, indexOrder }) => {
    const canvasRef = useRef(null)

    const maxValue = Math.max(...valuesCv);

    const draw = chart => {
        let xAxisValues = valuesCv;

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

        // Отрисовка Значений X (подписи + breakpoints + степени)
        let j = 0;
        function breakpointsStyles(element: any) {
            element.classList.add('breakpoint')
            element.classList.add('breakpoint-' + indexOrder)
            element.style.left = valuesFromSlider[i] - 2 + 'px';
        }
        let strValue, lengthStrValue, text;
        for (var i = 0; i < xAxisValues!.length; i++) {
            var xAxisValue = document.createElement('span');
            let breakpoint = document.createElement('div');
            let verticalLine = document.getElementById('xAxisValue-' + indexOrder);
            verticalLine?.classList.add('position-relative');

            // Отрисовка числа в степени
            if (xAxisValues![i] >= 10000) {
                strValue = xAxisValues![i] + '';
                lengthStrValue = strValue.length - 2 + '';
                text = document.createTextNode(strValue.slice(0, 2) + `e+${lengthStrValue}`);

                xAxisValue.appendChild(text);
                verticalLine!.appendChild(xAxisValue);
                verticalLine!.appendChild(breakpoint);
                breakpointsStyles(breakpoint)
            }
            // Отрисовка только разряды
            else if (xAxisValues[i] === rank![j]) {
                text = document.createTextNode(xAxisValues[i] + '');
                xAxisValue.appendChild(text);
                xAxisValue.style.fontSize = '20px';
                xAxisValue.style.top = '20px';
                verticalLine!.appendChild(xAxisValue);
                verticalLine!.appendChild(breakpoint);
                breakpointsStyles(breakpoint)
                j++;
            }
            // Отрисовка всяких неровных чисел
            else {
                text = document.createTextNode(xAxisValues[i] + '')
                xAxisValue.appendChild(text);
                verticalLine!.appendChild(breakpoint);
                breakpointsStyles(breakpoint)
                if (i % 2 === 0) { // Чётный индекс [i] == 0,2,4 ...
                    xAxisValue.style.top = '-35px';
                } else { // Нечётный индекс [i] == 1,3,5 ...
                    xAxisValue.style.top = '-10px';
                }
            }
            xAxisValue.style.position = 'absolute';
            xAxisValue.style.left = valuesFromSlider[i] - 2 + 'px';
            document.getElementById('xAxisValue-' + indexOrder)!.appendChild(xAxisValue);
        }

        // Отрисовка Значений Y
        // for (var i = yAxisValues.length - 1; i >= 0; i--) {
        //     var value = document.createElement('span');
        //     var text_value = document.createTextNode(yAxisValues[i])
        //     value.appendChild(text_value);
        //     document.getElementById('yAxisValues').appendChild(value);
        // }

        // Расчитывает растояние для линий от максимального значения, а не от ширины
        let percent = [];
        for (let i = 0; i < xAxisValues!.length; i++) {
            percent[i] = xAxisValues![i] / maxValue * 100;
        }

        // Отрисовка линии на графике     
        var chrt = document.getElementById("chart");

        // Отрисовка вертикальных линий
        function gridV() {
            for (var i = 0; i < valuesFromSlider.length; i++) {
                chart.strokeStyle = '#ccc';
                chart.lineWidth = 1;
                chart.moveTo(valuesFromSlider[i], 0);
                chart.lineTo(valuesFromSlider[i], ch);
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
        gridH();
        gridV();

        var chrt = document.getElementById("chart");
        chart.moveTo(0, chrt);
        chart.beginPath();
        chart.strokeStyle = '#0085FF';
        chart.lineWidth = 3;
        for (var i = 0; i < valuesFromSlider.length; i++) {
            chart.lineTo(valuesFromSlider[i], ch - (percent[i] / 100 * ch));
            chart.stroke();
        }

    }

    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        draw(context)
    }, [])
    return <>
        <div id="chart-wrapper">
            <div id="yAxisValues"></div>
            <canvas id="chart"
                ref={canvasRef}
                width={width} />
            <div id={'xAxisValue-' + indexOrder} />
        </div>

    </>
}

export default Canvas;

        // var yAxisValues = [100, 200, 300, 400, 500];
        // Расстояние вертикальных полос
        // let w = [];
        // for (let i = 0; i < xAxisValues.length; i++) {
        //     if (i == 0) {
        //         w[i] = 0
        //         i++;
        //     }
        //     w[i] = Math.round(i * (cw / xAxisValues.length))
        // }