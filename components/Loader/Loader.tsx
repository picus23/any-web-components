import { FC } from "react";
import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from "antd";

interface LoaderProps {
    style?: {},
    size?: number, 
}
 
const Loader: FC<LoaderProps> = ({style = {}, size}) => {
    return <Spin indicator={<LoadingOutlined rev="data" size={size} spin style={{...style, fontSize: 18, marginRight: -2, marginTop: -10}}/>} />
}
 
export default Loader;