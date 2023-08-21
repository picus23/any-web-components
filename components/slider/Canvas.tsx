import { FC, useEffect, useRef } from "react";

interface CanvasProps {
    valuesCv: number[],
    width: number,
    height: number,
    tickCount?: number,
    lineWidth: number,
    valuesFromSlider: number[],
    endpoints: number[],
    rank?: number[],
}

const Canvas: FC<CanvasProps> = ({ width, height, valuesCv, tickCount = 4, valuesFromSlider, rank, endpoints, lineWidth }) => {
    const canvasRef = useRef(null)

    console.log('endpoints inside canvas', endpoints)
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

        // Отрисовка Значений X (числа(текст) + breakpoints + степени)
        let j = 0;
        let strValue, lengthStrValue, text;
        function breakpointsStyles(element: any, i: number) {
            element.classList.add('breakpoint')
            element.classList.add('prev-canvas-values')
            element.style.left = endpoints[i] / 10 + (10 * i) + 'px';
            // element.style.left = valuesFromSlider[i] + 'px';
            // element.classList.add('d-none')
        }
        for (var i = 0; i < endpoints.length; i++) {
            // for (var i = 0; i < xAxisValues!.length; i++) {
            var xAxisValue = document.createElement('span');
            let breakpoint = document.createElement('div');
            let verticalLine = document.getElementById('xAxisValue');
            verticalLine?.classList.add('position-relative');

            // Отрисовка числа в степени
            // if (xAxisValues![i] >= 10000) {
            //     strValue = xAxisValues![i] + '';
            //     lengthStrValue = strValue.length - 2 + '';
            //     text = document.createTextNode(strValue.slice(0, 2) + `e+${lengthStrValue}`);
            //     xAxisValue.style.top = '20px';
            //     // xAxisValue.appendChild(text);
            //     verticalLine!.appendChild(xAxisValue);
            //     verticalLine!.appendChild(breakpoint);
            //     breakpointsStyles(breakpoint)
            // }
            // Отрисовка только разряды
            // else if (xAxisValues[i] === rank![j]) {
            //     text = document.createTextNode(xAxisValues[i] + '');
            //     xAxisValue.appendChild(text);
            //     xAxisValue.style.fontSize = '20px';
            //     xAxisValue.style.top = '20px';
            //     verticalLine!.appendChild(xAxisValue);
            //     verticalLine!.appendChild(breakpoint);
            //     breakpointsStyles(breakpoint)
            //     j++;
            // }
            // Отрисовка всяких неровных чисел
            // else {
            text = document.createTextNode(endpoints[i] + '')
            // text = document.createTextNode(xAxisValues[i] + '')
            xAxisValue.appendChild(text);
            verticalLine!.appendChild(breakpoint);
            if (i !== endpoints.length - 1) {
                breakpointsStyles(breakpoint, i);
            } else {
                breakpointsStyles(breakpoint, i)
                breakpoint.style.left = 1000 - 3 + 'px';
            }
            if (i % 2 === 0) { // Чётный индекс [i] == 0,2,4 ...
                xAxisValue.style.top = '-35px';
            } else { // Нечётный индекс [i] == 1,3,5 ...
                xAxisValue.style.top = '10px';
            }
            // }
            xAxisValue.classList.add('prev-canvas-values');
            xAxisValue.style.position = 'absolute';
            xAxisValue.style.fontSize = '14px';
            if (i !== endpoints.length - 1) {
                xAxisValue.style.left = endpoints[i] / 10 + (10*i) + 'px';
            } else {
                xAxisValue.style.left = 1000 + 'px';
            }
            // xAxisValue.style.left = valuesFromSlider[i] - 2 + 'px';
            document.getElementById('xAxisValue')!.appendChild(xAxisValue);
        }

        // Отрисовка Значений Y 
        // for (var i = yAxisValues.length - 1; i >= 0; i--) {
        //     var value = document.createElement('span');
        //     var text_value = document.createTextNode(yAxisValues[i])
        //     value.appendChild(text_value);
        //     document.getElementById('yAxisValues').appendChild(value);
        // }
        let percent = [];
        let k = valuesFromSlider.length - 1;
        // Расчитывает растояние для линий по Y от ширины X (в %)
        // for (let i = 0; i < valuesFromSlider!.length; i++) {
        //     if (i == 0) {
        //         percent[i] = ch;
        //     } else {
        //         percent[i] = (valuesFromSlider![k] / ch * 100);
        //     }
        //     k--;
        // }
        let percentTemp = [];
        let kTemp = endpoints.length - 1;
        // Расчитывает растояние для линий по Y от ширины X (в %)
        for (let i = 0; i < endpoints!.length; i++) {
            if (i == 0) {
                percentTemp[i] = ch;
            } else {
                percentTemp[i] = (valuesFromSlider![kTemp] / ch * 100);
            }
            kTemp--;
        }
        // console.log('percent',percent);
        console.log('percentTemp', percentTemp);

        // console.log('percent 1', percent);
        // console.log('valuesFromSlider', valuesFromSlider);

        // Отрисовка вертикальных линий
        // function gridV() {
        //     for (var i = 0; i < valuesFromSlider.length; i++) {
        //         chart.strokeStyle = '#ccc';
        //         chart.lineWidth = 1;
        //         chart.moveTo(valuesFromSlider[i], 0);
        //         chart.lineTo(valuesFromSlider[i], ch);
        //     }
        //     chart.stroke();
        // }

        // Отрисовка вертикальных линий v.2
        function gridV() {
            for (var i = 0; i < endpoints.length; i++) {
                chart.strokeStyle = '#ccc';
                chart.lineWidth = 1;
                chart.moveTo(endpoints[i] / 10 + (10*i), 0);
                chart.lineTo(endpoints[i] / 10 + (10*i), ch);
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

        // Отрисовка линии на графике
        // var chrt = document.getElementById("chart");
        // chart.moveTo(0, chrt);
        // chart.beginPath();
        // chart.strokeStyle = '#0085FF';
        // chart.lineWidth = lineWidth;
        // for (var i = 0; i < valuesFromSlider.length; i++) {
        //     chart.lineTo(valuesFromSlider[i], percent[i]);
        //     // chart.lineTo(valuesFromSlider[i], ch - (percent[i] / 100 * ch));
        //     chart.stroke();
        // }
    }

    useEffect(() => {
        document.querySelectorAll('.prev-canvas-values').forEach(el => {
            if (el.classList.contains('prev-canvas-values')) {
                el.remove()
            }
        })
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        draw(context)
    }, [draw])

    return <>
        <div id="chart-wrapper">
            <div id="yAxisValues"></div>
            <canvas id="chart"
                ref={canvasRef}
                width={width} />
            <div id='xAxisValue' />
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