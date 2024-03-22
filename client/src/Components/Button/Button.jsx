import Laoding from '../Loading/Laoding'
import './Button.scss'

const Button = ({ children, clr, onClick, w, bg, pad, isloading }) => {
    return (
        <button isLoading={isloading} className={`custombtn ${isloading && "islaoding"} ${w ? "fullw" : w} ${bg ? "btnblue" : "glass"} `} style={{ background: bg, color: clr, padding: pad ? pad : "15px 30px" }} onClick={onClick}>
            {isloading &&
                <Laoding />
            }
            {children}
        </button>
    )
}

export default Button