import './UplaodBar.scss'

const UploadBar = ({ per }) => {
    const progressPercentage = Math.floor((per / 100) * 100);
    const progressClass = progressPercentage === 100 ? 'complete' : 'incomplete';

    return (
        <div className="upload-bar">
            <div
                className={`progress-bar ${progressClass}`}
                style={{ width: `${progressPercentage}%` }}
            ></div>
            <p className={`progress-text ${progressClass}`}>
                {`File uploaded ${progressPercentage}% Completed`}
            </p>
        </div>
    );
};

export default UploadBar;
