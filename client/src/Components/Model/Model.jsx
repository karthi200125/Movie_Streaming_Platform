import './Model.scss';
import { AiOutlineClose } from "react-icons/ai";
import { useState } from 'react';

const Model = ({ onOpen, onClose, bodycontent }) => {
    const [isOpen, setIsOpen] = useState(onOpen);

    const handleClose = () => {
        setIsOpen(false);
        onClose();
    }

    return (
        <>
            {onOpen &&
                <div className={`modelcon`}>
                    <div className="model">
                        <AiOutlineClose className='modelclose' onClick={handleClose} />
                        {bodycontent}
                    </div>
                </div>
            }
        </>
    )
}

export default Model;
