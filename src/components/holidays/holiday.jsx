import img from "../img/adventure1.avif"
import img2 from "../img/bora-bora.jpg"
import "./holiday.scss"

function Holoday() {
    return (
        <div className="packs">
            <h4>Our Dream Vacation</h4>

            <div className="holiday_img">
                <img src={img} alt="" />
                <div className="img-des">
                    <p>An adventure is anExpedition, where the primary focus is the journeying,<br /> with less effort put into research and gathering information.</p>
                    <h4>exciting experience or undertaking that is typically bold, sometimes risky</h4>
                </div>

            </div>
            <div className="holiday1_img">
                <div className="img-des2">
                    <p>Bora Bora (French: Bora-Bora; Tahitian: Pora Pora) is an island group in the Leeward Islands in the South Pacific. The Leeward Islands comprise the western part of the Society Islands of French Polynesia,<br /> which is an overseas collectivity of the French Republic in the Pacific Ocean.</p>
                    <h4>exciting experience or undertaking that is typically bold, sometimes risky</h4>
                </div>
                <img src={img2} alt="" />

            </div>

        </div>
    )
}

export default Holoday;