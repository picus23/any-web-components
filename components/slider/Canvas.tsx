import { FC, useEffect, useRef } from "react";

interface CanvasProps {
    valuesCv: number[],
    width?: number,
    height?: number,
    tickCount?: number,
}

const Canvas: FC<CanvasProps> = ({ width, height, valuesCv, tickCount = 4, }) => {

    const canvasRef = useRef(null)

    const maxValue = Math.max(...valuesCv);

    const draw = chart => {
        var xAxisValues = valuesCv;
        // var yAxisValues = [100, 200, 300, 400, 500];

        chart.canvas.width = width;
        chart.canvas.height = height;
        var cw = chart.canvas.width;
        var ch = chart.canvas.height;


        // Расстояние горизонтальных линий
        let h = [];
        for (let i = 0; i < tickCount; i++) {
            if (i == 0) {
                h[i] = ch
            } else {
                h[i] = ch - i * (ch / tickCount)
            }
        }

        // Расстояние вертикальных линий
        let w = [];
        for (let i = 0; i < xAxisValues.length; i++) {
            if (i == 0) {
                w[i] = 0
            } else {
                w[i] = Math.round(i * (cw / xAxisValues.length))
            }
        }


        // Значения X
        for (var i = 0; i < xAxisValues.length; i++) {
            var xAxisValue = document.createElement('span');
            var text = document.createTextNode(xAxisValues[i])
            xAxisValue.appendChild(text);
            xAxisValue.style.position = 'absolute';
            xAxisValue.style.left = w[i] + 'px';
            document.getElementById('xAxisValues').appendChild(xAxisValue);
        }

        // Значения Y
        // for (var i = yAxisValues.length - 1; i >= 0; i--) {
        //     var value = document.createElement('span');
        //     var text_value = document.createTextNode(yAxisValues[i])
        //     value.appendChild(text_value);
        //     document.getElementById('yAxisValues').appendChild(value);
        // }

        var chrt = document.getElementById("chart");

        
        let percent = [];
        for (let i = 0; i < xAxisValues.length; i++) {
            percent[i] = xAxisValues[i] / maxValue * 100;
        }
        
        //line     
        chart.lineJoin = 'round';
        chart.moveTo(0, chrt);
        chart.beginPath();
        for (var i = 0; i < w.length; i++) {
            chart.strokeStyle = '#0085FF';
            chart.lineWidth = 3;
            chart.lineTo(w[i], ch - (percent[i] / 100 * ch));
            chart.stroke();
        }

        // vertical lines
        function gridV() {

            for (var i = 1; i < w.length; i++) {
                chart.strokeStyle = '#ccc';
                chart.lineWidth = 1;
                chart.moveTo(w[i], 0);
                chart.lineTo(w[i], ch);
            }
            chart.stroke();
        }

        //horizontal lines
        function gridH() {

            for (var i = 0; i < tickCount; i++) {
                chart.strokeStyle = '#ccc';
                chart.lineWidth = 0.5;
                chart.moveTo(0, ch - i * (ch / tickCount));
                chart.lineTo(cw, ch - i * (ch / tickCount));
            }
            chart.stroke();
        }
        gridV();
        gridH();
    }

    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        draw(context)

    }, [draw])

    return <>
        <div id="chart-wrapper">
            <div id="yAxisValues"></div>
            <canvas id="chart"
                ref={canvasRef} />
            <div id="xAxisValues"></div>
        </div>

    </>
}

export default Canvas;