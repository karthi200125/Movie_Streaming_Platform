import { AiOutlineClose } from "react-icons/ai";
import './Model.scss';

const Model = ({ onOpen, onClose, bodycontent }) => {
    
    const handleClose = () => {        
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
