export default function reverseArrays (valuesFromSlider:number[],valuesCv:number[]) {
    let k = 0;
    // Переворачивание массива с позициями
    let reverseValuesFromSlider: number[] = [];
    for (let i = valuesFromSlider.length - 1; i >= 0; i--) {
        reverseValuesFromSlider[k] = valuesFromSlider[i];
        k++;
    }
    k = 0;
    // Переворачивание массива со значениями
    let reverseValuesCv: number[] = [];
    for (let i = valuesCv.length - 1; i >= 0; i--) {
        reverseValuesCv[k] = valuesCv[i];
        k++;
    }
    return [reverseValuesFromSlider,reverseValuesCv];
}