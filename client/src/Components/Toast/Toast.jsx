import React from 'react';
import { CgDanger } from "react-icons/cg";
import { FaCheck } from "react-icons/fa";
import './Toast.scss';

const Toast = ({ onErr, tmsg }) => {

    return (
        <div className='toast'>
            <span className='toasticoncon' style={{ backgroundColor: onErr ? "red" : "blue" }}>
                {onErr ? <CgDanger className='toasticon' /> : <FaCheck className='toasticon' />}
            </span>
            <h1 className='toasttext' style={{ color: onErr ? "red" : "black" }}>{tmsg}</h1>
        </div>
    );
};

export default Toast;
