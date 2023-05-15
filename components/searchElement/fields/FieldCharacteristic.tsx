interface FieldCharacteristicProps {
    title: string,
    subtitle: string,
}
function FieldCharacteristic(props: FieldCharacteristicProps) {
    return <>
            <div className="d-flex flex-column">
                <span className="font-size-13 fw-500">{props.title}</span> 
                <span className="font-size-16-black fw-500">{props.subtitle}</span>
        </div>
    </>
}

export default FieldCharacteristic