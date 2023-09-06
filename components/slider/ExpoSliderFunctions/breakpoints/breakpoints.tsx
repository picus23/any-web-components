import React, {FC, useEffect, useState} from "react";
import clickBreakpoint from "./ClickBreakpoint";
// Функция для нажимания на breakpoint
// Здесь логика движения пальцев у слайдера и закрашивание breakpoints
export default function breakpoints(currentPositionMin,minDisplayValue,minValue,currentPositionMax,maxDisplayValue,maxValue) {
    useEffect(() => {
        const progress = document.querySelector('.sliderr .progres') as HTMLElement;
        const breakpoints = document.querySelectorAll<HTMLElement>('.breakpoint');

        breakpoints.forEach(el => {

            let breakpoint_pos = +el.style.left.slice(0, el.style.left.length - 2); // Убирает из строки px
            el.addEventListener('click', () => {
                clickBreakpoint(el, breakpoint_pos)
            });
            if (breakpoint_pos > currentPositionMin! && breakpoint_pos < currentPositionMax!) { // Активно, если breakpoint больше левого пальца и меньше правого
                el.classList.add('breakpoint-active')
            } else {
                el.classList.add('breakpoint')
                el.classList.remove('breakpoint-active')
            }
        })
        // Закрашивание синей полосы
        if (maxValue < 0) {
            progress.style.left = Math.abs(((minDisplayValue))) + '%';
            progress.style.right = Math.abs(100 - maxDisplayValue) + '%';
        } else if (minValue < 0) {
            progress.style.left = Math.abs(minDisplayValue) + '%';
            progress.style.right = 100 - maxDisplayValue + '%';
        } else {
            progress.style.left = minDisplayValue + '%';
            progress.style.right = 100 - maxDisplayValue + '%';
        }
    })
}
// help();