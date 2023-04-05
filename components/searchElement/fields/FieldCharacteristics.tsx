interface CharacteriscticsProps {
    title: string[],
    subtitle: string[],
}
function Characteristics(props: CharacteriscticsProps) {
    return <>
        <div className="d-flex justify-content-between">
            <div className="col">
                <span className="fw-500">{props.title}</span>
                <span className="fw-500">{props.subtitle}</span>
            </div>
        </div>
    </>
}

export default Characteristics