import "./whyus.scss";
import ladyImage from "../../assets/images/mainimglady.png";
import CtaButton from "../buttons/CtaButton";
import { IoCheckmark } from "react-icons/io5";

function WhyUs() {
    return (
        <div className="why-mainContainer">
            <div className="why-container">
                <div className="why-upper">
                    <div className="upper-graphic">
                        <div className="upper-bg">
                            <img src={ladyImage} alt="" />
                        </div>
                    </div>

                    <div className="upper-text">
                        <h1>Why Choose Us</h1>
                        <ul>
                            <li><span><IoCheckmark /></span>First Shit</li>
                            <li><span><IoCheckmark /></span>First Shit</li>
                            <li><span><IoCheckmark /></span>First Shit</li>
                            <li><span><IoCheckmark /></span>First Shit</li>
                            <li><span><IoCheckmark /></span>First Shit</li>
                            <li><span><IoCheckmark /></span>First Shit</li>
                        </ul>

                    </div>
                </div>

                <div className="why-bottom">
                    <h1>Wellness, Compassion, Quality</h1>
                    <p>The service provides immediate
                        medical care to patients with acute illnesses or injuries that require immediate attention
                    </p>
                    <CtaButton to="/appointmemt">Make an appointment</CtaButton>
                </div>
            </div>
        </div>
    )
}

export default WhyUs;