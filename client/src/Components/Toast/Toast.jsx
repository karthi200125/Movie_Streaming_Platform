import React from 'react';
import { CgDanger } from "react-icons/cg";
import { FaCheck } from "react-icons/fa";
import './Toast.scss';

const Toast = ({ onErr, tmsg }) => {

    return (
        <div className='toast'>
            <span className='toasticoncon' style={{ background: onErr ? "red" : "linear-gradient(to right, #0956e0, #062c9b)" }}>
                {onErr ? <CgDanger className='toasticon' /> : <FaCheck className='toasticon' />}
            </span>
            <h1 className='toasttext' style={{ color: onErr ? "red" : "black" }}>{tmsg}</h1>
        </div>
    );
};

export default Toast;
