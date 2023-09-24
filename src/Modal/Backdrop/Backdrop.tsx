import {MouseEventHandler} from 'react';
import "./Backdrop.css";

export type TBackdropProps = {
    show: boolean;
    click: MouseEventHandler<HTMLDivElement>;
}
export const Backdrop = ({show, click}: TBackdropProps) => {
    return (
        show ? <div onClick={click} className="Backdrop" /> : null
    )
}


