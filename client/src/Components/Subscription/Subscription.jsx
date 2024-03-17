import Button from '../Button/Button'
import './Subscription.scss'

const Subscription = () => {

    return (
        <div className='subscriptioncon'>
            <div className="subscription">
                <h1 className='subtitle'>Subscript and Now Start Streaming</h1>
                <div className="subdetails">
                    <ul className="freesub features">
                        <div className="featurestitle">For Free</div>
                        <li>Only Free Movies available</li>
                        <li>Max Video Quality 360p</li>
                        <li>Max Audio Quality Sterio</li>
                        <li>Not Add Free</li>
                    </ul>
                    <ul className="paidsub features">
                        <div className="featurestitle subpre">For Premium</div>
                        <li>All Movies available</li>
                        <li>Max Video Quality 720p , 1080p</li>
                        <li>Max Audio Quality Dolby Atoms</li>
                        <li>Add Free</li>
                    </ul>
                </div>
                <Button bg w={'100%'} pad={'20px'}>Continue with ₹ 149 /Month</Button>
            </div>
        </div>
    )
}

export default Subscription