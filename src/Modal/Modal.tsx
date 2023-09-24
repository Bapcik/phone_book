import {ReactNode} from 'react';
import {Backdrop, TBackdropProps} from './Backdrop/Backdrop';
import "./Modal.css"
import Button from '../Button/Button';

interface Props {
    children: ReactNode,
    show: boolean,
    hide: () => void,
}

const Modal = ({children, show, hide}: Props) => {
    return (
        <>
            <Backdrop show={show} click={hide} />
            <div
                className="Modal"
                style={{
                    transform: show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: show ? '1' : '0'
                }}
            >
                {children}
            </div>
        </>
    )
}

export default Modal
